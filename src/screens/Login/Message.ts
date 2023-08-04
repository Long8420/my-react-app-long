export enum SuccessMessage {
  TITLE_REGISTER_SUCCESS = 'Link Xác Thực Email',
  TITLE_SEND_MAIL_RESET_SUCCESS = 'Link Xác Thực Email',
  CONTENT_REGISTER_SUCCESS = 'Chúng tôi đã gửi email xác thực về địa chỉ email của bạn. Hãy mở email và click vào link để tiếp tục! Xin cảm ơn!',
  CONTENT_MAIL_RESET_SUCCESS = 'Chúng tôi đã gửi thông báo về địa chỉ email',
  SUB_CONTENT_MAIL_RESET_SUCCESS = 'Xin vui lòng kiểm tra email để tiến hành thay đổi mật khẩu mới. Xin chân thành cảm ơn!',
}
export enum ErrorMessage {
  TITLE_EMAIL_ALREADY = 'Email đã được sử dụng!',
  TITLE_EMAIL_NOT_VERIFIED = 'Xác Thực Email',
  TITLE_LOGIN_FAIL = 'Email hoặc mật khẩu không đúng',
  CONTENT_START_LOGIN_FAIL = 'Email hoặc mật khẩu của bạn không đúng. Nếu bạn chưa có tài khoản bạn có thể bấm',
  CONTENT_MIDDLE_LOGIN_FAIL = 'Đăng ký',
  CONTENT_END_LOGIN_FAIL = 'để được tiếp tục. Xin cảm ơn!',

  CONTENT_START_EMAIL_ALREADY = 'Email đã được sử dụng. Vui lòng thử lại bằng email khác hoặc chọn quên mật khẩu để đặt lại mật khẩu hoặc nhấn vào',
  CONTENT_MIDDLE_EMAIL_ALREADY = 'Đăng nhập',
  CONTENT_END_EMAIL_ALREADY = 'để sử dụng ngay. Xin cảm ơn!',

  CONTENT_START_NOT_VERIFIED = 'Email đã được đăng ký nhưng chưa được xác thực. Hãy kiểm tra email và làm theo hướng dẫn hoặc bạn có thể nhấn vào',
  CONTENT_MIDDLE_NOT_VERIFIED = 'Gửi lại',
  CONTENT_END_NOT_VERIFIED = 'để nhận lại thông tin xác thực. Xin cảm ơn!',
  CONTENT_EMAIL_ALREADY = 'Email đã được sử dụng. Vui lòng thử lại bằng email khác hoặc chọn quên mật khẩu để đặt lại mật khẩu hoặc nhấn vào',
  EMAIL_INVALID = 'Email không đúng định dạng',
  PASSWORD_INVALID = 'Mật khẩu: ít nhất 8 ký tự và nhiều nhất 25 ký tự. Ít nhất 1 chữ hoa, 1 số và 1 ký tự đặc biệt.',
  PASSWORD_CONFIRM_INVALID = 'Mật khẩu xác nhận không khớp',
  PHONE_INVALID = 'Số điện thoại: là số gồm 10 chữ số',
  NAME_INVALID = 'Tên: ít nhất 10 ký tự và nhiều nhất 25 ký tự.Ít nhất 1 dấu cách',
  ADDRESS_INVALID = 'Vui lòng nhập địa chỉ',
  NAME_CLASS_INVALID = 'Vui lòng nhập tên lớp hợp lệ (VD: 1a)',
}
