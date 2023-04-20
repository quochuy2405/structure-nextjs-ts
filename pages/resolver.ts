import yup from 'yupGlobal'

const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const schema = yup.object().shape({
  fullName: yup.string().required('Nhập tên đẩy đủ'),
  role: yup.string().required('Chọn quyền (Role)'),
  province: yup.string().required('Chọn thành phố trực thuộc'),
  email: yup.string().required('Nhập email').matches(REGEX_EMAIL, 'Email không hợp lệ'),
  areaInCharge: yup.string().required('Chọn khu vực phụ trách'),
  username: yup.string().required('Nhập user name'),
  password: yup.string().min(8, 'Mật khẩu phải ít nhất 8 ký tự').required('Nhập mật khẩu'),
  confirmPassword: yup
    .string()
    .required('Nhập lại mật khẩu')
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp')

  //   username*
  // fullName*
  // email*
  // role* [Surveyor/Hunter/Verifier]
  // province* [Hồ Chí Minh/Hà Nội/Đà Nẵng]
  // areaInCharge* [list district tương ứng province, lấy từ db ra]
  // phone
  // password*
})
