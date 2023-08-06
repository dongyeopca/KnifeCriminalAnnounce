import { Inter } from 'next/font/google';
import TableItem from './TableItem';
const inter = Inter({ subsets: ['latin'] });

interface apiResponse {
  location: string;
  time: string;
  link: string;
  message: string;
  criminal_info: string;
}
export default function Home({ posts }: { posts: apiResponse[] }) {
  return (
    <div className="App w-screen min-h-screen bg-gray-100 p-3">
      <div className="m-auto flex flex-col justify-center items-center max-w-3xl">
        <h1 className="text-blue-400 text-xl mb-2">칼부림 예보 현황판</h1>
        <p className="text-sm font-thin">
          본 서비스는 파이썬 크롤링과 chat-gpt를 활용하여 제작되었습니다. <br />
          예보 정보에 대한 정확성 및 중복 처리에 대해 미흡함이 있을수 있습니다.
        </p>
        <p className="text-sm font-thin mb-[20px]">예고정보는 매일 오전 9시 뉴스 크롤링을 통해 업데이트됩니다. </p>
        <table className="w-full">
          <thead className="flex justify-around mb-[10px] text-blue-400">
            <th className="font-normal">지역</th>
            <th className="font-normal">예보 시간</th>
            <th className="font-normal">출처</th>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <TableItem key={index} location={post.location} time={post.time} other={post.link} message={post.message} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://34.64.217.152:8000/all_rows');
  const posts: apiResponse[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 36000,
  };
}
