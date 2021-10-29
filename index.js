const axios = require('axios')

// 将username, password 的值改为自己的ECNU学号和密码
const params = new URLSearchParams({
  'action': 'login',
  'username': 'xxx',
  'password': 'xxx',
  'ac_id': '1',
  'user_ip': '',
  'nas_ip': '',
  'user_mac': '',
  'save_me': '0',
  'ajax': '1'
})

axios.post('https://login.ecnu.edu.cn/include/auth_action.php', params)
  .then(res => {
    console.log(res.status + ' ' + res.statusText)
  }).catch(error => {
    console.log(error)
  })