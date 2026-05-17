import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LangService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  langSvc = inject(LangService);
  private fb    = inject(FormBuilder);
  private http  = inject(HttpClient);

  get lang() { return this.langSvc.lang(); }

  get ui() {
    const fr = this.lang === 'fr';
    return {
      label:       fr ? 'Prenons Contact'     : 'Get In Touch',
      title1:      fr ? 'Connectons-nous'     : 'Let\'s',
      title2:      fr ? ''                    : 'Connect',
      desc:        fr ? 'Ouvert aux postes permanents, stages et opportunités de collaboration. N\'hésitez pas — envoyez un message et bâtissons quelque chose de grand ensemble.'
                      : 'Open to full-time roles, internships, and exciting collaboration opportunities. Don\'t hesitate — send a message and let\'s build something great.',
      panelTitle:  fr ? 'Envoyer un Message'  : 'Send a Message',
      nameLbl:     fr ? 'Nom'                 : 'Name',
      namePh:      fr ? 'Votre nom'           : 'Your name',
      emailLbl:    fr ? 'Courriel'            : 'Email',
      subjectLbl:  fr ? 'Sujet'               : 'Subject',
      subjectPh:   fr ? 'Quel est le sujet ?' : 'What\'s this about?',
      msgLbl:      fr ? 'Message'             : 'Message',
      msgPh:       fr ? 'Parlez-moi de votre projet ou opportunité...' : 'Tell me about your project or opportunity...',
      sendBtn:     fr ? 'Envoyer'             : 'Send Message',
      nameErr:     fr ? 'Le nom est requis'   : 'Name is required',
      emailErr:    fr ? 'Courriel valide requis' : 'Valid email required',
      msgErr:      fr ? 'Le message est requis'  : 'Message is required',
      emailCard:   fr ? 'Courriel'            : 'Email',
      phoneCard:   fr ? 'Téléphone'           : 'Phone',
      locCard:     fr ? 'Localisation'        : 'Location',
      availCard:   fr ? 'Disponibilité'       : 'Availability',
      availVal:    fr ? 'Ouvert aux opportunités' : 'Open to opportunities',
      docsTitle:   fr ? 'Documents'           : 'Documents',
      docCV:       fr ? 'CV'                  : 'Resume',
      docLetter:   fr ? 'Lettre de Motivation': 'Cover Letter',
      docTranscript: fr ? 'Relevé de Notes'   : 'Transcript',
      onlineTitle: fr ? 'Retrouvez-moi en ligne' : 'Find me online',
    };
  }

  contactForm: FormGroup = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
  });

  private apiUrl = 'http://localhost:3001/send-message';

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.apiUrl, this.contactForm.value).subscribe({
        next: () => {
          alert(this.lang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
          this.contactForm.reset();
        },
        error: () => {
          alert(this.lang === 'fr'
            ? 'Échec de l\'envoi. Contactez-moi directement : macroysimen@gmail.com'
            : 'Failed to send. Please email me directly: macroysimen@gmail.com');
        },
      });
    }
  }

  downloadDoc(filename: string, downloadName: string) {
    const a = document.createElement('a');
    a.href = `/assets/${filename}`;
    a.setAttribute('download', downloadName);
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }
}
