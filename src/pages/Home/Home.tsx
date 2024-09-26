import { FunctionComponent } from "react";
import PageLayout from "src/components/PageLayout/PageLayout";

const Home: FunctionComponent = () => {
  return (
    <PageLayout>
      <h1>Isten hozta a Kalászban!</h1>
      <ul>
        <li>Hír 1</li>
        <li>Hír 2</li>
        <li>Hír 3</li>
      </ul>
    </PageLayout>
  );
};

export default Home;
