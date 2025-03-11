const Page = () => {
  return (
    <div class="container">
      <form method="GET" action="/personaje">
        <input type="text" name="name" class="input" placeholder="Buscar personaje"/>
        <button type="submit" class="button">Buscar</button>
      </form>
    </div>
  );
};

export default Page;
