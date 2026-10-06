# Barbearia Seu Xico

Landing page oficial da **Barbearia Seu Xico** — barbearia em Cachoeiras de Macacu/RJ — com tabela de preços, Clube de Assinatura e gerador de agendamento via WhatsApp.

---

## Sobre o Projeto

O site é uma **página informativa e estática** que apresenta os serviços da barbearia, os planos do Clube de Assinatura e um formulário de agendamento que **gera uma mensagem pronta para o WhatsApp** — a confirmação do horário acontece manualmente pela equipe.

## Agendamento via WhatsApp

O formulário da seção `#agendamento` não envia dados para nenhum servidor. O fluxo é 100% client-side:

1. O usuário preenche **nome**, **serviço**, **data** e **horário**.
2. `js/script.js` monta a mensagem em tempo real e exibe a prévia no elemento `#messagePreview`.
3. Ao clicar em **"Enviar Agendamento no WhatsApp"**, o botão abre:

```
https://wa.me/5521972832618?text=<mensagem encodeURIComponent>
```

Exemplo de mensagem gerada:

```
Olá! Gostaria de agendar um horário na *Barbearia Seu Xico*.

👤 *Nome:* Lucas Silva
💈 *Serviço:* Corte de Cabelo (R$ 40,00)
📅 *Data:* 10/10/2026
⏰ *Horário:* 14:00

Aguardo confirmação!
```

## Contato

**Barbearia Seu Xico**

- 📍 R. Padre Antônio da Costa Carvalho, 267 — Parque Ribeira, Cachoeiras de Macacu/RJ
- 📞 / WhatsApp: (21) 97283-2618
- ✉️ E-mail: xiquinhobarber94@gmail.com
- 🌐 Site: [mrskillfull.github.io/seu-xico-servicos](https://mrskillfull.github.io/seu-xico-servicos/)
---

<p align=center>© 2026 Barbearia Seu Xico. Todos os direitos reservados.</p>
<p align=center> Desenvolvido com ☕ por Fernando Lima.</p>