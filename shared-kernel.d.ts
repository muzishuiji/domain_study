type Email = string;
type UniqueId = string;
// 用具名类型可以更清晰的表明这个字符串是用来做什么的，更容易理解和排查问题
type DateTimeString = string;
type PriceCents = number;

// 共享内核指的是一些代码和数据，对他们的依赖不会增加模块之间的耦合度
// 我们将内置类型的别名当作共享内核的一部分，这种全局都可用的类型不会增加模块之间的耦合，并且在程序的任何部分都可以使用到。
// 价格是具有两个字段的对象：价值和货币
type Currency = 'RUB' | 'USD' | 'EUR' | 'SEK';
type AmountCents = number;

type Price = {
    value: AmountCents;
    currency: Currency;
}

// 有一种方法可以让TypeScript理解我们想要一个特定的类型--ts-brand
// 它可以准确的跟踪类型的使用方式，但会使代码更复杂一些