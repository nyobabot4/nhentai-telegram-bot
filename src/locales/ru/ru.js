export default {
	language_name: 'Русский',
	greeting:      'Привет, {{name}}\n<b>В этом боте присутствует 18+ контент.\nНажимай эту кнопку только если ты старше 18!</b>',

	// # buttons:
	random_button:         'Случайная манга',
	search_button:         'Поиск',
	next_button:           'Следующая',
	previous_button:       'Предыдущая',
	back_button:           'Назад',
	fix_button:            'Починить',
	waitabit_button:       'Секундочку..',
	search_tips_button:    'Подсказки по поиску',
	settings_button:       'Настройки',
	next_page_button:      'Следующая страница',
	tap_to_open_favorites: 'Тыкни чтобы открыть избранные',
	tap_to_open_history:   'Тыкни чтобы открыть историю',
	open:                  'Открыть',

	// # manga related text:
	pages:           'страниц',
	tags:            'Теги: ',
	too_many_pages:  'Слишком много страниц :(',
	try_again_later: 'Попробуй позже :(',
	pages_fixed:     ' страниц',

	// # just text
	yes:                      'да',
	enabled:                  'включен',
	no:                       'нет',
	disabled:                 'выключен',
	date:                     'дате',
	popular:                  'популярности',
	nothing_is_found:         'Ничего не нашлось ¯_(ツ)_/¯',
	manga_does_not_exist:     'Этой манги не существует!',
	failed_to_get:            'Не удалось получить мангу!',
	zip_tip:                  'Тебе нужно указать код: `/zip 234638`',
	something_went_wrong:     'Что-то пошло не так :(',
	file_is_too_big:          'Извини, не могу отправить файл размером больше 50 MB в связи с ограничениями телеграма',
	size_of_your_file:        'Размер твоего файла: ',
	just_send_me_a_code:      'Просто отправь мне код',
	will_be_implemented_soon: 'Эта функция будет доступна совсем скоро',

	// # inline search
	history_tip_title:       'История!',
	history_tip_description: 'Это твоя история:',
	history_is_empty:        'Твоя история пуста!',

	next_page_tip_title:   'Следующая страница',
	next_page_tip_message: 'Чтобы просмотреть определенную страницу, вы можете <b>добавить /p</b><code>n</code> к поисковому запросу, где <code>n</code> - номер страницы',
	next_page_tip: 'ТЫКАЙ СЮДА или добавь "/p{{pageNumber}}" к поисковому запросу: ',

	sorting_by_popularity_tip_title: 'Для сортировки по популярности',
	sorting_by_new_tip_title:        'Для сортировке по новому',

	favorites:                 'Избранные!',
	favorites_tip_description: 'Это твои избранные:',
	favorites_is_empty:        'Ты еще ничего не лайкнул',

	sorting_tip_slim: 'Просто добавь "/s{{reverseSortingParameter}}" к поисковому запросу: ',
	sorting_tip:
	`Чтобы сортировать результаты по {{reverseSortingWord}}
	ты можешь добавить <b>/s{{reverseSortingParameter}}</b> к поисковому запросу`,

	// # settings:
	settings:               '<b>Настройки:</b>',
	search_appearance:      'Вид поиска:  ',
	search_sorting:         'Сортировка результатов по: ',
	random_locally:         'Рандом локально:  ',
	allow_repeat_in_random: 'Разрешить повторяться:  ',
	safe_mode:              'Безопасный режим ',
	about_settings:         'О настройках',
	about_settings_url:     '', // TODO: translate https://telegra.ph/Settings-04-09

	current_language:  'Язык: 🇷🇺',
	choose_a_language: 'Выбери язык:',

	article: 'статья',
	gallery: 'галлерея',

	// help
	help: 
	`• Для того чтобы открыть определенную мангу просто отправь мне ссылку или код
	• Так же возможно загрузить картинки в .zip файле с помощью /zip команды. Например: <code>/zip 234638</code>
	
	`,
	donation_message: '',
	search_tips:
	`<b>Поиск</b>
	• Ты можешь изменить порядок результатов если добавишь <code>/s</code><I>p</i> перед поисковым запросом, где <i>p</i> - означает по <b>п</b>опулярности или <i>n</i> - по дате, например: <code>/sp sex toys</code>
	• Ты можешь указать номер страницы если добавишь <code>/p</code>[<i>n</i>] перед поисковым запросом, где <i>n</i> - номер страницы, например: <code>/p5 sex toys</code>
	• Ты можешь искать несколько вещей сразу, и это будет находить только мангу, содержащие обе вещи. Например, <code>anal tanlines</code> найдет все манги, содержащие анал и тентакли.
	• Ты можешь исключить слова добавля перед ними <code>-</code>. Например, anal tanlines -yaoi найдет все манги с аналом и тентаклями но без яоя.
	• Конкретный поиск можно выполнить поставив запрос в ковычки. Например, <code>"big breasts"</code> найдет мангу только с <i>"big breasts"</i> где-то в названии или тэгах.
	• Это можно использовать вместе с tag namespaces(хз что это) для большего контроля над поиском: <code>parodies:railgun -tag:"big breast"</code>.
	• Ты можешь искать среди манги с определенным количеством страниц:20, или в промежутке: <code>pages:&gt;20 pages:&lt;=30.</code>
	• Ты можешь искать мангу, загруженную только за особую дату добавляя <code>uploaded:20d</code>. Можно использовать h(час), d(день), w(неделя), m(месяц), y(год).
	• Так же можно искать по промежуткам: <code>uploaded:&gt;20d uploaded:&lt;30d.</code>`
}
