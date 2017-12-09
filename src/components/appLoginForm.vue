<template>
  <Tabs class="login-form" value="loginTypeForNum">
    <!-- 账号登陆 -->
    <TabPane label="账号登录" name="loginTypeForNum">
      <Form class="login-form" ref="formValidateNum" :model="formValidateNum" :rules="ruleValidateNum">
        <FormItem prop="user">
          <Input type="text" size="large" v-model="formValidateNum.user" placeholder="请输入邮箱/账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" size="large" v-model="formValidateNum.password" placeholder="请输入密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Checkbox :checked="single">记住密码</Checkbox>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmitNum('formValidateNum')">登录</Button>
        </FormItem>
      </Form>
    </TabPane>
    <!-- 手机登录 -->
    <TabPane label="手机登录" name="loginTypeForPhone">
      <Form class="login-form" ref="formValidatePhone" :model="formValidatePhone" :rules="ruleValidatePhone">
        <FormItem prop="phone">
          <Input type="text" size="large" v-model="formValidatePhone.phone" placeholder="请输入手机号">
            <Icon type="iphone" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="code">
          <Row>
            <Col span="15">
              <Input type="text" size="large" v-model="formValidatePhone.code" placeholder="请输入验证码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </Col>
            <Col span="8" offset="1">
              <Button type="primary" style="width: 100%">获取验证码</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmitPhone('formValidatePhone')">登录</Button>
        </FormItem>
      </Form>
    </TabPane>
  </Tabs>
</template>

<script>
  export default {
    name: 'loginForm',
    data () {
      // 单独的手机验证
      const validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写手机号'))
        } else if (!(/^1\d{10}$/).test(value)) {
          callback(new Error('请填写正确格式的手机号'))
        } else {
          callback()
        }
      }
      // 单独的验证码验证
      const validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写验证码'))
        } else if ((/[^\d]/g).test(value)) {
          callback(new Error('验证码只能是数字'))
        } else {
          callback()
        }
      }
      return {
        single: false,
        // 账号登录的数据对象
        formValidateNum: {
          user: '',
          password: ''
        },
        // 账号登录验证的数据对象
        ruleValidateNum: {
          user: [
            { required: true, message: '请填写邮箱或账号', trigger: 'blur,change' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur,change' }
          ]
        },
        // 手机验证码登录的数据对象
        formValidatePhone: {
          phone: '',
          code: ''
        },
        // 手机验证码验证的数据对象
        ruleValidatePhone: {
          phone: [
            { validator: validatePhone, trigger: 'blur,change' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur,change' }
          ]
        }
      }
    },
    methods: {
      // 账号登录
      handleSubmitNum (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success')
          } else {
            this.$Message.error('表单验证不通过！')
          }
        })
      },
      // 手机验证码登录
      handleSubmitPhone (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success')
          } else {
            this.$Message.error('表单验证不通过！')
          }
        })
      }
    }
  }
</script>

<style lang="scss">

  .login-form{
    margin: 0 auto;
    width: 340px;
  }
</style>
