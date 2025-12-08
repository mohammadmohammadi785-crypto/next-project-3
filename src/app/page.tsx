async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl text-center">
        Welcome to the Home Page
      </h1>
    </div>
  );
}

export default Home;
