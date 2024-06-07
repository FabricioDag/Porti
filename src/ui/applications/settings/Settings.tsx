function Settings() {
  return (
    <div className="settings application">
      <h1>Settings</h1>

      <div className="inputBox">
        <p>Selecione um fuso Horario</p>
        <select name="" id="">
          <option value="">00:00 UTC</option>
          <option value="">-03:00 UTC</option>
          <option value="">-02:00 UTC</option>
          <option value="">-01:00 UTC</option>
        </select>
      </div>

      <div className="inputBox">
        <p>Selecione uma lingua</p>
        <select name="" id="">
          <option value="">Portugues</option>
          <option value="">Ingles</option>
          <option value="">Espanhol</option>
        </select>
      </div>

      <div className="inputBox">
        <p>Selecione um Tema</p>
        <select name="" id="">
          <option value="">Claro</option>
          <option value="">Escuro</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
