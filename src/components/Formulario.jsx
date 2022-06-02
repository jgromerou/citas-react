const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>
      <form className="bg-white shadow-md rounded-xl py-10 px-5 mb-10">
        {/* Nombre de la Mascota */}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        {/* Propietario de la Mascota */}
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        {/* Fecha Alta */}
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Fecha del alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        {/* Síntomas */}
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">
            Nombre Mascota
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
