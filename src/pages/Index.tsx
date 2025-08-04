import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from '@/components/ui/icon'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-steel-100 to-white">
      {/* Header */}
      <header className="bg-steel-800 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={32} className="text-primary" />
                <div>
                  <h1 className="text-2xl font-bold font-sans">METALPOINT</h1>
                  <p className="text-xs text-steel-300">Металл и его будущее</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={16} />
                <span>Москва</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 128-40-87</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="bg-steel-700 border-t border-steel-600">
          <div className="container mx-auto px-4">
            <div className="flex space-x-8 py-3">
              <a href="#" className="flex items-center space-x-1 hover:text-primary transition-colors">
                <Icon name="Grid3X3" size={16} />
                <span className="font-medium">КАТАЛОГ</span>
              </a>
              <a href="#company" className="hover:text-primary transition-colors">О КОМПАНИИ</a>
              <a href="#delivery" className="hover:text-primary transition-colors">ДОСТАВКА</a>
              <a href="#contacts" className="hover:text-primary transition-colors">КОНТАКТЫ</a>
              <div className="ml-auto flex items-center space-x-4">
                <Button variant="outline" size="sm" className="bg-transparent border-steel-400 text-white hover:bg-steel-600">
                  <Icon name="Search" size={16} className="mr-1" />
                  Поиск
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={16} className="mr-1" />
                  Корзина
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-steel-800 via-steel-700 to-steel-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold font-sans mb-6 leading-tight">
                НЕРЖАВЕЙКА
                <span className="block text-3xl text-steel-300 font-body mt-2">
                  ШИРОКИЙ АССОРТИМЕНТ МЕТАЛЛОПРОКАТА
                </span>
              </h2>
              <p className="text-xl text-steel-200 mb-8 font-body">
                БОЛЕЕ 2500 НОМЕНКЛАТУРНЫХ ПОЗИЦИЙ
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                УЗНАЙ ПОДРОБНЕЕ В КАТАЛОГЕ
              </Button>
            </div>
            <div className="relative">
              <img 
                src="img/2989c827-c7fa-4daa-8a54-ecb31ce4f31a.jpg" 
                alt="Металлопрокат" 
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-sans text-steel-800 mb-4">
              НЕРЖАВЕЮЩИЙ МЕТАЛЛОПРОКАТ В METALPOINT
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-steel-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-6 bg-steel-100 rounded-lg">
                  <img 
                    src="img/2989c827-c7fa-4daa-8a54-ecb31ce4f31a.jpg" 
                    alt="Трубы нержавеющие" 
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <CardTitle className="text-xl font-sans text-steel-800">
                  ТРУБЫ НЕРЖАВЕЮЩИЕ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-steel-600 font-body">
                  <p>→ Труба круглая электросварная</p>
                  <p>→ Труба круглая бесшовная</p>
                  <p>→ Труба профильная</p>
                </div>
                <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-steel-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-6 bg-steel-100 rounded-lg">
                  <img 
                    src="img/a77ff6d5-3b37-4365-a761-4ebd4be1528f.jpg" 
                    alt="Сортовой прокат" 
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <CardTitle className="text-xl font-sans text-steel-800">
                  СОРТОВОЙ ПРОКАТ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-steel-600 font-body">
                  <p>→ Круг нержавеющий</p>
                  <p>→ Полоса нержавеющая</p>
                  <p>→ Уголок нержавеющий</p>
                </div>
                <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-steel-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-6 bg-steel-100 rounded-lg">
                  <img 
                    src="img/81b6c5cc-1294-4dd0-b87c-aa6deae6aa20.jpg" 
                    alt="Листовой прокат" 
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <CardTitle className="text-xl font-sans text-steel-800">
                  ЛИСТОВОЙ ПРОКАТ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-steel-600 font-body">
                  <p>→ Лист нержавеющий матовый</p>
                  <p>→ Лист нержавеющий зеркальный</p>
                  <p>→ Лист перфорированный</p>
                </div>
                <Button variant="outline" className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="company" className="py-16 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-sans text-steel-800 mb-6">О КОМПАНИИ</h3>
              <div className="space-y-4 font-body text-steel-600">
                <p className="text-lg">
                  METALPOINT — ведущий поставщик нержавеющего металлопроката в России. 
                  Мы предлагаем широкий ассортимент качественной продукции для различных отраслей промышленности.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary">2500+</div>
                    <div className="text-sm text-steel-600">Номенклатурных позиций</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-steel-600">Лет на рынке</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Icon name="CheckCircle" size={24} className="text-primary" />
                <span className="font-body text-steel-700">Гарантия качества продукции</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Icon name="Truck" size={24} className="text-primary" />
                <span className="font-body text-steel-700">Быстрая доставка по России</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Icon name="Award" size={24} className="text-primary" />
                <span className="font-body text-steel-700">Сертифицированная продукция</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg">
                <Icon name="Users" size={24} className="text-primary" />
                <span className="font-body text-steel-700">Персональный менеджер</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-sans text-steel-800 text-center mb-12">ДОСТАВКА</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-sans">По Москве</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Доставка в пределах МКАД - бесплатно при заказе от 50 000 рублей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Truck" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-sans">По России</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Транспортными компаниями: ПЭК, Деловые Линии, КИТ
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-sans">Сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Со склада в Москве - в день заказа, под заказ - от 3 дней
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-steel-800 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-sans text-center mb-12">КОНТАКТЫ</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-sans mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <div className="font-bold">+7 (495) 128-40-87</div>
                    <div className="text-steel-300 text-sm">+7 (800) 350-94-98</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@metalpoint.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>г. Москва, Западный округ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Пн-Пт: 9:00-18:00, Сб-Вс: выходной</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-sans mb-6">Наши преимущества</h4>
              <div className="space-y-3 font-body">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Лучшие цены на рынке</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Консультация специалистов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Индивидуальный подход</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Гибкая система скидок</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel-900 text-steel-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" size={24} className="text-primary" />
              <span className="font-sans font-bold text-white">METALPOINT</span>
            </div>
            <div className="text-center md:text-right">
              <p className="font-body text-sm">
                © 2024 METALPOINT. Все права защищены.
              </p>
              <p className="font-body text-xs text-steel-400 mt-1">
                Металлопрокат высшего качества
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index