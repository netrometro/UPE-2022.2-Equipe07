package com.adocaoapi.adocao.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;


import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtServico {

    private static final String SECRET_KEY = "a8a8abe5-433b-49e3-85df-238eadb3e20a";

    public String extrairEmail(String token) {
        return extrairReivindicacao(token, Claims::getSubject);
    }

    public <T> T extrairReivindicacao(String token, Function<Claims, T> verficador) {
        final Claims reivindicacoes = extrairRevidicacoes(token);
        return verficador.apply(reivindicacoes);
    }

    public String geradorToken(UserDetails detalhesUsuario) {
        return geradorToken(new HashMap<>(), detalhesUsuario);
    }

    public String geradorToken(Map<String, Object> extraReividicacao, UserDetails detalhesUsuario) {
        return Jwts
                .builder()
                .setClaims(extraReividicacao)
                .setSubject(detalhesUsuario.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getChaveUnica(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValido(String token, UserDetails detalhesUsuario) {
        final String email = extrairEmail(token);

        return (email.equals(detalhesUsuario.getUsername())) && !tokenInspirou(token);
    }

    private boolean tokenInspirou(String token) {
        return extrairInspiracao(token).before(new Date());
    }

    private Date extrairInspiracao(String token) {
        return extrairReivindicacao(token, Claims::getExpiration);
    }

    private Claims extrairRevidicacoes(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getChaveUnica())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getChaveUnica() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);

        return Keys.hmacShaKeyFor(keyBytes);
    }

}
