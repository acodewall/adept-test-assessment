# adept-test-assessment
Created with CodeSandbox

Первая правка: Кнопки “Update” у элементов списка при клике должны менять 3 цифры в этом же элементе до круглых скобок с единицей (nnn (1)), но что-то не работает, хотя клиент утверждает, что его разработчик написал весь код 🙂 Похоже там ошибка.

Вторая правка: Кнопки “Update” теперь работают правильно, но обновление только в одной строке заставляет перерендериваться все 200 элементов списка. Это видно по счётчикам отрисовок в круглых скобках. Оптимизируй перерисовку, чтобы у элементов списка при клике на “Update” происходило обновление только того компонента, в котором нажимаем кнопку. renderCount уже показывает актуальное количество отрисовок компонента Row, переделывать его не нужно.
