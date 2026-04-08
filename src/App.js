import React from 'react';

// Componente de Tarjeta de Proyecto
const ProjectCard = ({ title, description, tags, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map(tag => (
        <span key={tag} className="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded">
          {tag}
        </span>
      ))}
    </div>
    <a href={link} target="_blank" rel="noreferrer" className="text-blue-500 font-medium hover:underline">
      Ver Repositorio →
    </a>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-700">AO.dev</span>
          <div className="space-x-6">
            <a href="#proyectos" className="hover:text-blue-600">Proyectos</a>
            <a href="mailto:armando.ortizvegas@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center lg:text-left lg:flex items-center">
        <div className="lg:w-2/3">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            Juan Armando Ortiz Vegas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ingeniero de Sistemas en formación | Desarrollador Full Stack.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">

          </div>
        </div>
      </header>

      {/* Sobre Mí - Enfocado en la Vacante */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Perfil Profesional</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            Desarrollador Full Stack con formación en Ingeniería de Sistemas y sólida trayectoria en el
            diseño de arquitecturas escalables. Especialista en el desarrollo de soluciones end-to-end
            utilizando el stack MERN (MongoDB, Express, React, Node.js) y Java/Spring Boot.
            Experiencia comprobada en la implementación de Microservicios, APIs REST y sistemas Multitenant con aislamiento de datos y
            gestión de roles, optimizando la lógica de negocio para startups tecnológicas y entornos de alta responsabilidad. Experto en la integración de
            datos en tiempo real mediante WebSockets y gestión de bases de datos tanto relacionales (SQL Server, MySQL) como NoSQL (MongoDB). Profesional proactivo,
            orientado a la seguridad, observabilidad y aplicación de buenas prácticas de desarrollo para entregar productos de alto impacto.
          </p>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="proyectos" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos de Impacto</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProjectCard
            title="AviReport - Avícola"
            description="Sistema integral con arquitectura Multitenant para la gestión de procesos avícolas y logística para múltiples clientes."
            tags={["React", "Node.js", "Supabase", "Multitenant"]}
            link="https://github.com/Armando2623/avicola"
          />
          <ProjectCard
            title="School Management System"
            description="Sistema integral desarrollado para la gestión de registros escolares, persistencia de datos y lógica administrativa institucional."
            tags={["Java", "SQL Server", "Desktop App", "JDBC"]}
            link="https://github.com/Armando2623/School.git"
          />
          <ProjectCard
            title="Gestión de Citas - Microservicios"
            description="Arquitectura escalable en Java/Spring Boot para el control de accesos y citas institucionales con enfoque en seguridad."
            tags={["Java", "Spring Boot", "SQL Server", "Microservicios"]}
            link="https://github.com/Armando2623"
          />
          <ProjectCard
            title="Control Financiero Full Stack"
            description="Plataforma interactiva para la gestión de transacciones CRUD en tiempo real con JavaScript y React."
            tags={["JavaScript", "React", "Express", "API REST"]}
            link="https://github.com/Armando2623"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">Piura, Perú | armando.ortizvegas@gmail.com</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Armando2623" className="hover:text-blue-400">GitHub</a>
            <a href="www.linkedin.com/in/armando-ortiz-vegas-415b12184" className="hover:text-blue-400">LinkedIn</a>
          </div>
          <p className="mt-8 text-gray-500 text-sm">© 2026 Juan Armando Ortiz Vegas</p>
        </div>
      </footer>
    </div>
  );
};

export default App;