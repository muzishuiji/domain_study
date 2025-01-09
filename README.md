# domain_study
前端领域的干净架构的学习实践

## 初始化设计

领域都定义在domain目录下，应用层定义在application目录下，适配器都定义在service目录下。

### 创建领域实体

领域层有4个实体：

  - product（产品）；
  - user（用户）；
  - order（订单）；
  - cart（购物车）；

确认实体后，可以检查以下几点：
  - 参与者是否是一个用户；
  - 订单里是否有足够的信息；
  - 有些实体是否需要扩展；
  - 在未来是否有足够的可扩展性；


### 可能会用到的服务
  - 第三方支付服务；
  - 通知用户事件和错误的服务；
  - 将数据保存到本地存储的服务；


简略版本实现了一个商店应用的设计，也为日常开发中的一些模块设计和分层设计找到了更具体的理论支撑，引发了我更多的思考。

结合这些理论思考当前工程里的设计不合理的地方，同时在日后开发一个完整独立的工程的设计思路也变的更清晰。


