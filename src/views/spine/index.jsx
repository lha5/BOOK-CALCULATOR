import PageTitle from 'components/common/PageTitle';
import CalculateTable from 'components/spine/CalculateTable';
import Notice from 'components/common/Notice';

function index() {
  return (
    <div className="flex flex-col md:w-full lg:w-2/3 mx-auto pb-8">
      <PageTitle title="책등 계산기" />
      <div className="flex items-center justify-center mt-5 mb-7 md:w-full">
        <CalculateTable />
      </div>
      <Notice />
    </div>
  );
}

export default index;
