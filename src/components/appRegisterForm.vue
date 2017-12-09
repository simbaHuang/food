<template>
  <Tabs class="login-form" value="registerTypeForMail">
    <!-- 邮箱注册 -->
    <TabPane label="邮箱注册" name="registerTypeForMail">
      <Form class="login-form" ref="formValidateMail" :model="formValidateMail" :rules="ruleValidateMail">
        <FormItem prop="mail">
          <Input type="text" size="large" v-model="formValidateMail.mail" placeholder="请输入邮箱">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" size="large" v-model="formValidateMail.password" placeholder="请输入密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Checkbox :checked="singleMail">
            我已阅读并且同意<a href="javascript:">《美食杰用户使用协议》</a>
          </Checkbox>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmitMail('formValidateMail')">注册</Button>
        </FormItem>
      </Form>
    </TabPane>
    <!-- 手机号注册 -->
    <TabPane label="手机号注册" name="registerTypeForPhone">
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
              <Button type="primary" style="width: 100%">免费获取验证码</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Checkbox :checked="singlePhone">
            我已阅读并且同意<a href="javascript:">《美食杰用户使用协议》</a>
          </Checkbox>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmitPhone('formValidatePhone')">注册</Button>
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
        singleMail: false,
        singlePhone: false,
        formValidateMail: {
          mail: '',
          code: '',
          password: ''
        },
        ruleValidateMail: {
          mail: [
            { required: true, message: '请填写邮箱', trigger: 'blur,change' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur,change' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur,change' }
          ]
        },
        formValidatePhone: {
          phone: '',
          code: ''
        },
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
      handleSubmitMail (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success')
          } else {
            this.$Message.error('表单验证不通过！')
          }
        })
      },
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
