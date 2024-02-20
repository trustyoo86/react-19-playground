import { useState, use, Suspense } from 'react';
import { faker } from '@faker-js/faker';

export const RootPage = () => {
  const [newsPromise, setNewsPromise] = useState(() => fetchNews());

  const handleUpdate = () => {
    fetchNews().then((news) => {
      setNewsPromise(Promise.resolve(news));
    });
  };

  return (
    <>
      <h3>News List <button onClick={handleUpdate}>Refresh</button></h3>
      <NewsContainer newsPromise={newsPromise} />
    </>
  );
};

const news = [...new Array(4)].map(() => faker.lorem.sentence());

const fetchNews = () => new Promise<string[]>((resolve) => setTimeout(() => {
  news.unshift(faker.lorem.sentence());
  resolve(news);
}, 1000));

interface TProps {
  newsPromise: Promise<string[]>;
}

const NewsContainer = ({ newsPromise }: TProps) => (
  <Suspense fallback={<p>Loading...</p>}>
    <News newsPromise={newsPromise} />
  </Suspense>
);

const News = ({ newsPromise }: TProps) => {
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

export default RootPage;
