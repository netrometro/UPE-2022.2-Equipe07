import nodemailer from 'nodemailer';

export interface EnviarEmailProps {
    subject: string;
    corpo: string;
    nome: string;
    email: string;
}

const tranporte = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bced7ebf4be2e4",
        pass: "0db39f10743dd3"
    }
});

export class EnviarEmail {
    async enviar({ subject, corpo, email, nome }: EnviarEmailProps) {
        await tranporte.sendMail({
            from: 'Equipe Adocão <amadeu@adocao.com>',
            to: nome + email,
            subject,
            html: corpo
        });
    }
}