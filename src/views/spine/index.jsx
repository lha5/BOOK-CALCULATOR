import PageTitle from 'components/common/PageTitle';
import CalculateTable from 'components/spine/CalculateTable';
import Notice from 'components/spine/Notice';

function index() {
  return (
    <div className="flex flex-col md:w-full lg:w-2/3 mx-auto">
      <PageTitle title="책등 계산기" />
      <div className="flex flex-col space-y-4 md:flex-row items-center justify-center md:space-y-0 md:justify-between my-8 md:w-full">
        <CalculateTable />
      </div>
      <Notice />
    </div>
  );
}

export default index;
