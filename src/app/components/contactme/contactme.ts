import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactme.html',
  styleUrl: './contactme.css'
})
export default class Contactme {
  constructor(private http: HttpClient) { }

  selectedPlatform: 'email' | "whatsapp" = 'email';
  email: string = '';
  subject: string = '';
  message: string = '';

  setPlatform(platform: 'email' | 'whatsapp') {
    this.selectedPlatform = platform;
  }

  sendWhatsApp() {
    const text = this.message.trim();

    if (!text || !/^[a-zA-Z0-9 .,!?¿¡áéíóúÁÉÍÓÚñÑ]+$/.test(text)) {
      alert('Please enter a valid message.');
      return;
    }

    const phoneNumber = '573194428331';
    const encodeMessage = encodeURIComponent(text)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
    window.open(whatsappUrl, '__blank');
  }

  sendEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/;

    if (!regex.test(this.email)) {
      alert('El email debe ser válido y pertenecer a un dominio permitido.');
      return;
    }

    if (this.subject.trim().length > 50) {
      alert('El asunto no puede contener más de 50 caracteres.')
      return;
    }

    if (!this.subject || !this.email || !this.message) {
      alert('Complete todos los campos.')
      return;
    }

    fetch('https://sendemailapi-ccee.onrender.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.email,
        subject: this.subject,
        message: this.message,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta de la API:', data);
        alert('Correo enviado con éxito');
      }).catch(error => {
        console.log('Error:', error);
        alert('Hubo un error al enviar el correo');
      });
  }

  onEnter(event: any) {

    const keyboardEvent = event as KeyboardEvent;

    if (!event.shiftKey) {
      event.preventDefault();

      if (this.selectedPlatform === 'whatsapp') {
        this.sendWhatsApp();
      } else {
        this.sendEmail();
      }
    }
  }

}







