import classNames from 'classnames/bind';

import styles from './ProfileTermsOfUse.module.scss';

import Button from '~/components/Button';
import { ArrowLeftIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ProfileTermsOfUse({ handleCancel }) {
  return (
    <div className={cx('col-12')}>
      <h2 className={cx('profile__heading')}>
        <Button onClick={handleCancel} backProfile leftIcon={<ArrowLeftIcon className={cx('icon')} />} />
        Điều khoản sử dụng
      </h2>

      <p className={cx('profile__desc')}>
        Quyền được phép sử dụng Trang Grocery Mart và Dịch Vụ có hiệu lực cho đến khi bị chấm dứt. Quyền được phép sử
        dụng sẽ bị chấm dứt theo Điều Khoản Dịch Vụ này hoặc trường hợp Người Sử Dụng vi phạm bất cứ điều khoản hoặc
        điều kiện nào được quy định tại Điều Khoản Dịch Vụ này. Trong trường hợp đó, Grocery Mart có thể chấm dứt việc
        sử dụng của Người Sử Dụng bằng hoặc không cần thông báo.
      </p>
      <p className={cx('profile__desc')}>
        Người sử dụng không được phép truy cập sàn giao dịch thương mại điện tử Grocery Mart, mở tài khoản hoặc bằng
        cách khác truy cập tài khoản người dùng của mình thông qua bất kỳ phần mềm hoặc phần cứng không được chấp thuận
        hoặc cung cấp bởi Grocery Mart, bao gồm phần mềm giả lập, thiết bị giả lập, phần mềm tự động phần mềm thay đổi
        thông tin thiết bị, hoặc bất kỳ phần mềm, thiết bị hoặc phần cứng nào nhằm mục đích thực hiện hành vi gian lận,
        lạm dụng các Chính Sách Grocery Mart hoặc có chức năng tương tự.
      </p>
      <p className={cx('profile__desc')}>
        Người sử dụng không được phép cố gắng chuyển đổi mã chương trình, đảo ngược kỹ thuật, tháo gỡ hoặc xâm nhập
        (hack) Dịch Vụ (hoặc bất cứ hợp phần nào theo đó); hoặc phá bỏ hoặc vượt qua bất kỳ công nghệ mã hóa hoặc biện
        pháp bảo mật nào được Grocery Mart áp dụng đối với các Dịch Vụ và/hoặc các dữ liệu được truyền tải, xử lý hoặc
        lưu trữ bởi Grocery Mart
      </p>
    </div>
  );
}

export default ProfileTermsOfUse;
