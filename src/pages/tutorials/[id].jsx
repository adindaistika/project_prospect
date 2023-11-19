export default function Tutorials() {
  return (
    <main className="p-2 rounded-md shadow-md border bg-white text-black">
      <div>
        <iframe
          width="560"
          height="315"
          className="w-full rounded-lg mb-5"
          src="https://www.youtube.com/embed/W1MlXE5fBLM?si=dYQyTvSauKz5lNeU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-semibold">Tutorial 1</div>
        <div className="collapse-content pt-3 border-t">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea
            praesentium ratione illo hic doloribus dolorem sunt nostrum
            necessitatibus est, eligendi nemo veniam corrupti ipsa atque magnam
            sed perspiciatis nam fuga neque ex eveniet animi sint. Autem,
            explicabo? Repellendus doloremque ratione esse sed unde corporis id
            magni aut, harum suscipit?
          </p>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "TUTORIALS" },
  };
}
