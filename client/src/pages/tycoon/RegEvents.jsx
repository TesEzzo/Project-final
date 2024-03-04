const RegEvents = () => {
  return (
    <>
      <table className="border border-black bg-blue-200">
        <thead>
          <tr>
            <th>ID</th>
            <th>Evento</th>
            <th>Data e orario</th>
            <th>Giocatori</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody>
          {/* { //NOTE - aggiungere i dati per le tabelle
             data?.comments && data.comments.length > 0 && data.comments.map((comment) => (
               <tr key={}>
                 <td>{}</td>
                 <td>{}</td>
                 <td>{}</td>
                 <td>{}</td>
               </tr>
             ))
           } */}
        </tbody>
      </table>
    </>
  );
};

export default RegEvents;
