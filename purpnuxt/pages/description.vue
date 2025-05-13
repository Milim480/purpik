<template>
    <NuxtLayout>
        <main>
            <section class="portfolio">
                <div class="HeroProjekt">
                    <div class="Nameprojet">
                        <h2>Комфортное общественное пространство в г. Светлогорске</h2>
                    </div>
                    <div class="backbutton">
                        <NuxtLink to="/portfolio"><button class="btn">К проектам</button></NuxtLink>
                    </div>
                </div>
            </section>
            <section class="conteiner">
                <table class="table-container">
                    <tbody>
                        <tr>
                            <td>Типология</td>
                            <td>Объект городской инфраструктуры</td>
                        </tr>
                        <tr>
                            <td>Площадь участка</td>
                            <td>6,8 га</td>
                        </tr>
                        <tr>
                            <td>Общая площадь застройки</td>
                            <td>4 341 кв.м</td>
                        </tr>
                        <tr>
                            <td>Объем участия</td>
                            <td>Генеральное проектирование</td>
                        </tr>
                        <tr>
                            <td>Заказчик</td>
                            <td>Администрация г. Светлогорска</td>
                        </tr>
                        <tr>
                            <td>Статус</td>
                            <td>Положительное заключение гос. экспертизы проектной документации</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section class="conteiner">
                <!-- Картиночки -->
                <img src="./assets/news.jpg" alt="NONE" />
            </section>
            <section class="conteiner">
                <div class="conteinertopdescript">
                    <h2 class="">Описание проекта</h2>
                    <div class="textdescripttop">
                        <p>Планировка участка предусмотрена в пейзажном стиле с плавными линиями проездов, дорожек,
                            площадок.</p>
                        <p>При работе с территорией сохранена защитная прикоренвая зона существующих деревьев.</p>
                    </div>
                </div>
                <div class="textdescriptbottom">
                    <div>
                        <p>Природное окружение и живописный рельеф продиктовали откза от урбанистического подхода в
                            пользу
                            средовой загородной архитектуры. Здания построены с учетом рельефа свободно, с минимальным
                            влиянием на растущие деревья.</p>
                    </div>
                    <div class="countdescript">
                        <div>
                            <h3>72%</h3>
                            <p>Озеленение участка</p>
                        </div>
                        <div>
                            <h3>4 Корпуса</h3>
                            <p>Различного спортивного назначения</p>
                        </div>
                        <div>
                            <h3>100</h3>
                            <p>Участников от 18 до 64 лет</p>
                        </div>
                        <div>
                            <h3>15 М</h3>
                            <p>Максимальная высота зданий, строений</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>

<style>
@import url(/index.css);
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap');
</style>