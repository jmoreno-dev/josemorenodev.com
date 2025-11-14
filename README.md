# 🚀 Personal Portfolio - José Antonio Moreno Marín

Interactive professional portfolio built with React and Vite, designed to showcase my skills, experience, and projects as a Full Stack Developer.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-00C4CC?style=flat)](https://www.emailjs.com/)

## ✨ Features

- 🎨 **Modern & Responsive Design**: Elegant interface optimized for all devices
- 📧 **Contact Form**: EmailJS integration to receive messages directly
- 📄 **CV Download**: Download resume in PDF format
- 🧩 **Modular Components**: Scalable and maintainable architecture
- ⚡ **Optimized Performance**: Fast loading thanks to Vite
- 🎭 **Smooth Animations**: Professional transitions and visual effects

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - JavaScript library for building user interfaces
- **Vite 7.2.2** - Next-generation frontend build tool
- **CSS3** - Custom styles and responsive design

### Tools
- **EmailJS 4.4.1** - Email service without backend
- **ESLint** - Linter to maintain clean code
- **React Hooks** - useState, useRef for state management

## 📂 Project Structure

```
my-web-IA/
├── public/              # Static files (CV, images)
├── src/
│   ├── assets/          # Media resources
│   ├── components/      # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── ProfileSection.jsx
│   │   ├── Experience.jsx   # Work experience
│   │   ├── TechSkills.jsx   # Technical skills
│   │   ├── Projects.jsx     # Featured projects
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer
│   │   └── Transition.jsx   # Transition effects
│   ├── App.jsx          # Main component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # Base HTML
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Installation & Usage

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jmoreno-dev/my-web.git
cd my-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure EmailJS** (optional)
   
   If you want to enable the contact form, create an account on [EmailJS](https://www.emailjs.com/) and update the credentials in `src/components/Contact.jsx`:
   ```javascript
   emailjs.sendForm(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       form.current,
       'YOUR_PUBLIC_KEY'
   )
   ```

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Optimized files will be generated in the `dist/` folder

### Production Preview

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📧 Contact Form Configuration

The form uses EmailJS for sending messages. To configure it:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Set up an email template
4. Get your Public Key
5. Update the credentials in `Contact.jsx`

## 🎨 Customization

To customize the portfolio:

1. **Content**: Edit the components in `src/components/`
2. **Styles**: Modify `App.css` and `index.css`
3. **Personal information**: Update the `Hero.jsx` component
4. **CV**: Replace the PDF file in the `public/` folder
5. **Profile image**: Update the image in `public/`

## 📱 Portfolio Sections

- **Hero**: Main presentation with name, title, and download options
- **Profile**: About me information
- **Experience**: Work experience and career path
- **Tech Skills**: Technical skills and technologies
- **Projects**: Featured projects
- **Contact**: Functional contact form
- **Footer**: Contact information and social media

## 🌐 Deployment

This project can be deployed on:
- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **Railway**
- Any static hosting service

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**José Antonio Moreno Marín**
- GitHub: [@jmoreno-dev](https://github.com/jmoreno-dev)
- Portfolio: Full Stack Developer

---

⭐ If you like this project, give it a star on GitHub!

**Built with ❤️ using React + Vite**
