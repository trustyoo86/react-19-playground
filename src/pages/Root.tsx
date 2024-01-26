import { faker } from '@faker-js/faker';
import { Suspense, use, useState } from 'react';

let news = [...new Array(4)].map(() => faker.lorem.sentence());

const fetchNews = () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      news.unshift(faker.lorem.sentence());
      resolve(news);
    }, 1000);
  });
};

const NewsContainer = ({ newsPromise }) => (
  <Suspense fallback={<p>Fetching the news...</p>}>
    <News newsPromise={newsPromise} />
  </Suspense>
);

const News = ({ newsPromise }) => {
  const news = use<string[]>(newsPromise);
  return (
    <ul>
      {
        news.map((title, index) => (
          <li key={index}>{title}</li>
        ))
      }
    </ul>
  );
};

function RootPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [newsPromise, setNewsPromise] = useState<Promise<string[]>>(() => fetchNews);

  const handleUpdate = () => {
    fetchNews().then((news) => {
      setNewsPromise(Promise.resolve(news));
    });
  };

  return (<>
    <h3>
      Here is the news <button onClick={handleUpdate}>Refresh</button>
    </h3>
    <NewsContainer newsPromise={newsPromise} />
  </>);
}

export default RootPage;
