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
export class Contactme {
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
    if (!this.email || !this.subject || !this.message) {
      alert('Por favor completa todos los campos');
      return;
    }

    const payload = {
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    this.http.post('https://portfolio-three-puce-96.vercel.app/api/sendEmail', payload).subscribe({
      next: (res: any) => {
        alert('Correo enviado con éxito');
      },

      error: (error) => {
        console.log('Error enviando al correo: ', error);
        alert('Error al enviar el correo: ' + error.error.message);
      }
    });
  }
}