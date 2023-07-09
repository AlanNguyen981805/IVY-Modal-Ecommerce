import ListProduct from './ListProduct';
import { getProductsByCate } from '@/services/product/product.api';
import { ISubCate } from '@/types/settings';

interface IProps {
  title?: string;
  categories: ISubCate[];
  isViewAll?: boolean;
  cate: string
}

const SlideProducts: React.FC<IProps> = async ({ title, categories, isViewAll = true, cate }) => {
  const products = await getProductsByCate(cate);
  return (
    <div className="my-10">
      <ListProduct categories={categories} title={title || ''} products={products} />

      {isViewAll && (
        <div className="flex justify-center mt-6">
          <button className="text-center bg-white after:z-[-1] after:left-[30px] after:rounded-br-[24px] after:content-[''] after:top-1 after:border-[#b6b6b6] after:border-r after:border-t after:border-b relative after:w-4/5 after:h-[90%]  after:block after:absolute after:px-4 after:py-2 px-4 py-2 rounded-tl-[24px] rounded-br-[24px] text-primaryDark border ml-3 cursor-pointer hover:text-white transition ease-in-out hover:bg-primaryDark border-[#221F20]">
            Xem tất cả
          </button>
        </div>
      )}
    </div>
  );
};

export default SlideProducts;
