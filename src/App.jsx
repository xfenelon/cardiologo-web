import { useState } from 'react'
import './App.css'
import hospitalPuebla from './assets/hospitalpuebla.png'
import fotopersonal from './assets/fotopersonal.jpeg'
import fotoconsultorio from './assets/fotoconsultorio.jpeg'
import operacion from './assets/operacion.jpeg'
import aparato from './assets/aparato.jpeg'
import marcapasos from './assets/marcapasos.jpeg'
import laraza from './assets/laraza.jpeg'
import torre from './assets/torre.jpg'
import salaOperacion1 from './assets/salaoperacion.png'
import salaOperacion2 from './assets/salaoperacion2.png'
import salaOperacion3 from './assets/salaoperacion3.jpeg'
import salaOperacion4 from './assets/salaoperacion4.jpeg'
import salaOperacion5 from './assets/salaoperacion5.png'
import salaOperacion6 from './assets/salaoperacion6.jpeg'
import video1 from './assets/video1.mp4'
import video2 from './assets/video2.mp4'
import video3 from './assets/video3.mp4'
import video4 from './assets/video4.mp4'
import video5 from './assets/video5.mp4'

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <main>
      <nav className="navbar">
        <div className="logo">
          <span className="heart">♡</span>
          <div>
            <h2>Dr. Ricardo Samuel Vargas Salgado</h2>
            <p>Cardiólogo</p>
          </div>
        </div>

        <button
          className={`menu-toggle ${menuAbierto ? 'activo' : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuAbierto ? 'abierto' : ''} onClick={() => setMenuAbierto(false)}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre mí</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#cuando-acudir">Síntomas</a></li>
          <li><a href="#ubicacion">Ubicación</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-text">
          <p className="tag">CARDIOLOGÍA EN PUEBLA</p>
          <h1>Dr. Ricardo Samuel Vargas Salgado</h1>
          <p className="especialidad">Especialista en el cuidado de tu corazón</p>
          <p className="descripcion">
            Atención médica especializada en prevención, diagnóstico y tratamiento
            de enfermedades cardiovasculares.
          </p>

          <div className="botones">
            <a className="btn" href="#contacto">Agendar cita</a>
            <a className="btn btn-secundario" href="#servicios">Ver servicios</a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Consulta cardiológica</h3>

          <div className="info-box">
            <span>Especialidad</span>
            <p>Cardiología</p>
          </div>

          <div className="info-box">
            <span>Formación</span>
            <p>Hospital de Especialidades Centro Médico Nacional La Raza, UNAM.</p>
          </div>

          <div className="info-box">
            <span>Cédula profesional</span>
            <p>3064553</p>
            <span>Cédula de especialidad</span>
            <p>6673993</p>
          </div>

          <div className="sede">
            <h4>Hospital Puebla</h4>
            <p>Zona de Angelópolis</p>
            <p>Consultorio 617 · Sexto piso</p>
          </div>
        </div>
      </section>

      <section className="sobre" id="sobre">
        <div className="section-text">
          <p className="tag azul">SOBRE EL DOCTOR</p>
          <h2>Atención cardiológica con enfoque profesional y humano</h2>
          <p>
            El Dr. Ricardo Samuel Vargas Salgado es especialista en Cardiología.
            Su formación académica y clínica se desarrolló en el Hospital de
            Especialidades Centro Médico Nacional La Raza, UNAM, una de las
            instituciones de mayor prestigio en cardiología a nivel nacional,
            donde consolidó su experiencia en el diagnóstico y tratamiento de
            enfermedades del corazón.
          </p>
          <p>
            Actualmente atiende de forma exclusiva en el Hospital Puebla, brindando
            consulta especializada enfocada en la prevención, diagnóstico y
            tratamiento cardiovascular, con el mismo nivel de rigor clínico
            adquirido durante su formación.
          </p>
        </div>

        <div className="foto-real foto-doctor">
          <img src={fotopersonal} alt="Dr. Ricardo Samuel Vargas Salgado" />
        </div>
      </section>

      <section className="formacion">
        <div className="cabecera">
          <p className="tag azul">FORMACIÓN ACADÉMICA</p>
          <h2>Hospital de Especialidades Centro Médico Nacional La Raza</h2>
          <p className="formacion-nota">
            Institución donde el Dr. Vargas Salgado realizó su formación en Cardiología.
          </p>
        </div>

        <div className="formacion-grid">
          <div className="foto-real">
            <img src={laraza} alt="Entrada del Hospital de Especialidades La Raza" />
            <span className="foto-caption">Hospital de Especialidades La Raza</span>
          </div>

          <div className="foto-real">
            <img src={torre} alt="Torre del Centro Médico Nacional La Raza" />
           
          </div>
        </div>
      </section>

      <section className="trayectoria">
        <div className="cabecera">
          <p className="tag azul">TRAYECTORIA</p>
          <h2>Experiencia en procedimientos cardiológicos</h2>
        </div>

        <div className="trayectoria-grid">
          <div className="foto-real">
            <img src={operacion} alt="Procedimiento cardiológico realizado por el Dr. Vargas Salgado" />
            <span className="foto-caption">Procedimiento cardiológico</span>
          </div>

          <div className="foto-real">
            <img src={aparato} alt="Equipo especializado utilizado en procedimientos cardiológicos" />
            <span className="foto-caption">Equipo especializado</span>
          </div>

          <div className="foto-real">
            <img src={marcapasos} alt="Marcapasos utilizado en procedimientos cardiológicos" />
            <span className="foto-caption">Marcapasos</span>
          </div>
        </div>
      </section>

      <section className="sala-operaciones" id="sala-operaciones">
        <div className="cabecera">
          <p className="tag azul">GALERÍA CLÍNICA</p>
          <h2>Dentro de la sala de operaciones</h2>
        </div>

        <div className="sala-operaciones-grid">
          <div className="foto-real">
            <img src={salaOperacion1} alt="Sala de operaciones donde el Dr. Vargas Salgado realiza procedimientos" />
          </div>

          <div className="foto-real">
            <img src={salaOperacion2} alt="Sala de operaciones durante un procedimiento cardiológico" />
          </div>

          <div className="foto-real">
            <img src={salaOperacion3} alt="Equipo médico trabajando en sala de operaciones" />
          </div>

          <div className="foto-real">
            <img src={salaOperacion4} alt="Sala de operaciones equipada para procedimientos cardiológicos" />
          </div>

          <div className="foto-real">
            <img src={salaOperacion5} alt="Procedimiento cardiológico en curso en sala de operaciones" />
          </div>

          <div className="foto-real">
            <img src={salaOperacion6} alt="Instalaciones de la sala de operaciones del Hospital Puebla" />
          </div>
        </div>
      </section>

      <section className="servicios" id="servicios">
        <div className="cabecera">
          <p className="tag azul">SERVICIOS</p>
          <h2>Procedimientos y estudios cardiológicos</h2>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Electrocardiograma</h3>
            <p>Estudio para evaluar la actividad eléctrica del corazón.</p>
          </div>

          <div className="card">
            <h3>Ecocardiograma</h3>
            <p>Ultrasonido que permite observar la estructura y funcionamiento del corazón.</p>
          </div>

          <div className="card">
            <h3>Prueba de esfuerzo</h3>
            <p>Evalúa la respuesta del corazón durante el ejercicio.</p>
          </div>

          <div className="card">
            <h3>Holter 24 horas</h3>
            <p>Registro continuo del ritmo cardíaco durante un día completo.</p>
          </div>

          <div className="card">
            <h3>Mapeo de presión arterial</h3>
            <p>Monitoreo de la presión arterial durante 24 horas.</p>
          </div>

          <div className="card">
            <h3>Cateterismo cardíaco</h3>
            <p>Procedimiento para diagnosticar y tratar enfermedades de las arterias coronarias.</p>
          </div>

          <div className="card">
            <h3>Estudio electrofisiológico</h3>
            <p>Permite diagnosticar alteraciones del ritmo cardíaco.</p>
          </div>

          <div className="card">
            <h3>Marcapasos</h3>
            <p>Valoración, colocación y seguimiento de dispositivos cardíacos.</p>
          </div>

          <div className="card">
            <h3>Monitores de presión</h3>
            <p>Seguimiento continuo para pacientes con hipertensión arterial.</p>
          </div>
        </div>
      </section>

      <section className="seguros" id="seguros">
        <div className="cabecera">
          <p className="tag azul">SEGUROS MÉDICOS</p>
          <h2>Aceptamos seguros de gastos médicos mayores</h2>
          <p className="seguros-descripcion">
            El consultorio del Dr. Vargas Salgado acepta pacientes con seguro de
            gastos médicos mayores. La cobertura aplica principalmente para
            procedimientos como cateterismo cardíaco, colocación de marcapasos
            y estudios electrofisiológicos para el tratamiento de arritmias
            mediante cateterismo.
          </p>
        </div>

        <div className="seguros-lista">
          <span className="seguro-badge">GNP Seguros</span>
          <span className="seguro-badge">AXA Seguros</span>
          <span className="seguro-badge">MetLife</span>
          <span className="seguro-badge">Seguros Monterrey New York Life</span>
          <span className="seguro-badge">Otras aseguradoras</span>
        </div>

        <p className="seguros-nota">
          Te recomendamos confirmar tu cobertura y el proceso de autorización
          directamente con tu aseguradora antes de tu consulta.
        </p>
      </section>

      <section className="cuando" id="cuando-acudir">
        <div className="cabecera">
          <p className="tag azul">¿CUÁNDO ACUDIR?</p>
          <h2>Señales por las que conviene visitar a un cardiólogo</h2>
        </div>

        <div className="cards sintomas">
          <div className="card">
            <h3>Dolor en el pecho</h3>
            <p>Molestia, presión o dolor en el pecho que aparece en reposo o esfuerzo.</p>
          </div>

          <div className="card">
            <h3>Palpitaciones</h3>
            <p>Sensación de latidos rápidos, irregulares o fuertes.</p>
          </div>

          <div className="card">
            <h3>Presión alta</h3>
            <p>Diagnóstico o sospecha de hipertensión arterial.</p>
          </div>

          <div className="card">
            <h3>Falta de aire</h3>
            <p>Dificultad para respirar al caminar, subir escaleras o estar acostado.</p>
          </div>

          <div className="card">
            <h3>Mareos o desmayos</h3>
            <p>Episodios de pérdida de equilibrio, desvanecimiento o desmayo.</p>
          </div>

          <div className="card">
            <h3>Chequeo preventivo</h3>
            <p>Valoración del corazón en pacientes con diabetes, colesterol alto o antecedentes familiares.</p>
          </div>
        </div>
      </section>

      <section className="horarios">
        <div className="cabecera">
          <p className="tag azul">HORARIOS DE ATENCIÓN</p>
          <h2>Consulta en Hospital Puebla</h2>
        </div>

        <div className="horarios-grid">
          <div className="horario-card">
            <h3>Martes y Jueves</h3>
            <p>Consulta general</p>
            <span className="horario-hora">2:00 p.m. — 7:00 p.m.</span>
          </div>

          <div className="horario-card">
            <h3>Viernes</h3>
            <p>Solo urgencias</p>
            
          </div>

          <div className="horario-card horario-emergencia">
            <h3>Sábado y Domingo</h3>
            <p>Únicamente casos de extrema urgencia</p>
            <span className="horario-hora">Línea de emergencia: </span>
          </div>
        </div>
      </section>

      <section className="ubicacion" id="ubicacion">
        <div className="section-text">
          <p className="tag azul">UBICACIÓN</p>
          <h2>Consulta en Hospital Puebla</h2>
          <p>Zona de Angelópolis · Consultorio 617 · Sexto piso</p>
        </div>

        <div className="mapa-real">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7568359803445!2d-98.23113522479579!3d19.03043378216481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc776ef75190d%3A0xde4d9063394de177!2sHospital%20Puebla!5e0!3m2!1ses-419!2smx!4v1782933061408!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Hospital Puebla"
          ></iframe>
        </div>
      </section>

      <section className="instalaciones" id="instalaciones">
        <div className="cabecera">
          <p className="tag azul">INSTALACIONES</p>
          <h2>Conoce el consultorio</h2>
        </div>

        <div className="instalaciones-grid">
          <div className="foto-real">
            <img src={hospitalPuebla} alt="Hospital Puebla" />
            <span className="foto-caption">Hospital Puebla</span>
          </div>

          <div className="foto-real">
            <img src={fotoconsultorio} alt="Entrada del consultorio 617" />
            <span className="foto-caption">Entrada del consultorio</span>
          </div>
        </div>
      </section>

      <section className="videos" id="videos">
        <div className="cabecera">
          <p className="tag azul">VIDEOS</p>
          <h2>Conoce más en video</h2>
        </div>

        <div className="videos-grid">
          <div className="video-real">
            <video src={video1} controls preload="metadata"></video>
          </div>

          <div className="video-real">
            <video src={video2} controls preload="metadata"></video>
          </div>

          <div className="video-real">
            <video src={video3} controls preload="metadata"></video>
          </div>

          <div className="video-real">
            <video src={video4} controls preload="metadata"></video>
          </div>

          <div className="video-real">
            <video src={video5} controls preload="metadata"></video>
          </div>
        </div>
      </section>

      <section className="opiniones">
        <p className="tag azul">OPINIONES</p>
        <h2>Comentarios de pacientes</h2>

        <div className="cards opiniones-cards">
          <div className="card opinion">
            <p>"Atención profesional, clara y muy humana."</p>
            <strong>Paciente</strong>
          </div>

          <div className="card opinion">
            <p>"Explica muy bien el diagnóstico y el tratamiento."</p>
            <strong>Paciente</strong>
          </div>

          <div className="card opinion">
            <p>"Excelente trato y seguimiento médico."</p>
            <strong>Paciente</strong>
          </div>
        </div>

        <div className="botones opiniones-boton">
          <a
            className="btn btn-secundario"
            href="https://share.google/SPZKy3KgcNu6GXo9e"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todas las opiniones en Google
          </a>
        </div>
      </section>

     <section className="contacto" id="contacto">
  <p className="tag">AGENDA TU CITA</p>
  <h2>Cuida tu corazón con atención especializada</h2>
  <p>Hospital Puebla · Consultorio 617 · Sexto piso</p>
  <p className="contacto-nota">
    Nota: el consultorio 617 es compartido. Al escribir por WhatsApp, especifica
    que tu cita es con el <strong>Dr. Ricardo Samuel Vargas Salgado, Cardiólogo</strong>.
  </p>

  <div className="botones contacto-botones">
    <a className="btn" href="https://wa.me/522211031257" target="_blank" rel="noopener noreferrer">
      Agendar por WhatsApp
    </a>
    <a className="btn btn-secundario" href="tel:2211031257">
      Llamar al consultorio
    </a>
    <a className="btn btn-secundario" href="mailto:ricvar7216@gmail.com">
      Escribir por correo
    </a>
  </div>
</section>
    </main>
  )
}

export default App
