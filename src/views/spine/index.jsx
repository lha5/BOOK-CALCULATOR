import PageTitle from 'components/common/PageTitle';
import PageInput from 'components/spine/PageInput';
import Card from 'components/spine/Card';
import Notice from 'components/spine/Notice';

function index() {
  return (
    <div className="flex flex-col md:w-[55%] mx-auto">
      <PageTitle title="책등 계산기" />
      <PageInput />
      <div className="flex flex-col space-y-4 md:flex-row items-center justify-center md:space-y-0 md:justify-between my-8 md:w-full">
        <Card weight={100} result={1.055} />
        <Card weight={80} result={1.045} />
      </div>
      <Notice />
    </div>
  );
}

export default index;
