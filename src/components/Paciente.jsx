const Paciente = () => {
  return (
    <div className="mx-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario de la Mascota: {''}
        <span className="font-normal normal-case">Juan</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="font-normal normal-case">31 de Mayo de 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius
          laboriosam excepturi debitis, iste modi amet et repellat sequi nihil
          dolor officia molestias repellendus suscipit provident esse beatae
          quam possimus!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
