import { Link } from 'react-router-dom';

import Footer from 'components/layout/Footer';

function NotFound() {
  return (
    <>
      <main className="absolute top-0 bottom-0 w-full flex flex-col items-center justify-center">
        <p className="text-center">페이지를 찾을 수 없습니다.</p>
        <Link
          to="/"
          replace
          className="text-lg font-semibold hover:text-emerald-500 mt-2"
        >
          홈으로 돌아가기
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
