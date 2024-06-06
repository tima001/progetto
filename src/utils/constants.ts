import {sidebarLink} from '../features/types'
import TGLogo from '../assets/img/landing/tg-logo.png'
import DewsignAwards from '../assets/img/landing/designAwards.jpeg'
import GrabientLogo from '../assets/img/landing/GrabientLogo.jpeg'
import Grabient from '../assets/img/landing/Grabient.png'
export const Lorum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc maecenas dignissim non ultrices turpis felis. Pulvinar odio in lobortis semper tellus pharetra, aenean odio sed. Tempor, sit risus pretium pretium, eleifend enim. Amet eget sem volutpat tortor mattis ut tincidunt est. Urna volutpat semper morbi neque consectetur aliquet tellus. Egestas id etiam mi lacus in hendrerit scelerisque sed. Enim volutpat sem mattis pretium. Tristique morbi imperdiet vitae volutpat viverra in. Sed at lobortis sagittis, ullamcorper platea dictum curabitur viverra sit.'

export const REACT_APP_IAM_SERVICE_BASE_URL =
    'https://educon-online-iam-service.azurewebsites.net/api'

export const REACT_APP_ONLINE_COURSE_BASE_URL =
    'https://educon-online-course-service.azurewebsites.net/api'

export const REACT_APP_STUDENT_COURSE_BASE_URL =
    'https://educon-online-student-course-service.azurewebsites.net/api'

export const ALPHABET = [
    {id: '1', name: 'A'},
    {id: '2', name: 'B'},
    {id: '3', name: 'C'},
    {id: '4', name: 'D'},
    {id: '5', name: 'E'},
    {id: '6', name: 'F'},
    {id: '7', name: 'G'},
    {id: '8', name: 'H'},
    {id: '9', name: 'I'},
    {id: '10', name: 'J'},
    {id: '11', name: 'K'},
    {id: '12', name: 'L'},
    {id: '13', name: 'M'},
    {id: '14', name: 'N'},
    {id: '15', name: 'O'},
    {id: '16', name: 'P'},
    {id: '17', name: 'Q'},
    {id: '18', name: 'R'},
    {id: '19', name: 'S'},
    {id: '20', name: 'T'},
    {id: '21', name: 'U'},
    {id: '22', name: 'V'},
    {id: '23', name: 'W'},
    {id: '24', name: 'X'},
    {id: '25', name: 'Y'},
    {id: '26', name: 'Z'},
]

export const LANGUAGES = [
    {id: 'KZ', name: 'KZ'},
    {id: 'RU', name: 'RU'},
]

export const VIDEO = 'VIDEO'

export const TEST = 'TEST'

export const MODERATOR = 'MODERATOR'

export const SELLER = 'SELLER'

export const CURATOR = 'CURATOR'

export const TEACHER = 'TEACHER'

export const SUPER_ADMIN = 'SUPER_ADMIN'

export const STUDENT = 'STUDENT'

export const sidebarLinks = ({formatMessage}): sidebarLink[] => [
    {
        id: 1,
        title: formatMessage({id: 'courses'}),
        path: '/courses',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 2,
        title: formatMessage({id: 'price'}),
        path: '/price',
        allowedRoles: [MODERATOR],
    },
    {
        id: 3,
        title: formatMessage({id: 'subjects'}),
        path: '/subjects',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 4,
        title: formatMessage({id: 'students'}),
        path: '/students',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 5,
        title: formatMessage({id: 'allGroups'}),
        path: '/groups',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 6,
        title: formatMessage({id: 'teachers'}),
        path: '/teachers',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 7,
        title: formatMessage({id: 'managers'}),
        path: '/managers',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 8,
        title: formatMessage({id: 'myCourses'}),
        path: '/my-courses',
        allowedRoles: [STUDENT],
    },
    {
        id: 9,
        title: formatMessage({id: 'purchase'}),
        path: '/buy-course',
        allowedRoles: [STUDENT],
    },
    {
        id: 10,
        title: formatMessage({id: 'myCourses'}),
        path: '/teacher-courses',
        allowedRoles: [TEACHER],
    },
    {
        id: 11,
        title: formatMessage({id: 'Students'}),
        path: '/curator/students',
        allowedRoles: [CURATOR],
    },
    {
        id: 12,
        title: formatMessage({id: 'Groups'}),
        path: '/curator/groups',
        allowedRoles: [CURATOR],
    },
    {
        id: 13,
        title: formatMessage({id: 'examAnalysis'}),
        path: '/curator/analysis',
        allowedRoles: [CURATOR],
    },
]

export const fakeStudents = [
    {
        id: 1,
        firstName: 'Сержан ',
        lastName: 'Арманов',
        mobile: '+7 776 664 45 55',
        courses: ['ҰБТ'],
        subjects: ['Қазақстан тарихы', 'Оқу сауаттылығы', 'География'],
        group: 'ME-2',
        password: 'Бағлан Мырзабай',
        language: 'RU',
        sectionResult: '20:00/25:30',
        sectionPercentage: '75%',
        gender: 'm',
        grade: '8a',
        school: 'BIL',
        firm: 'educon',
        email: 'eduway@online.com'
    },
    {
        id: 2,
        firstName: 'Бағлан',
        lastName: 'Әбдіхани',
        mobile: '+7 776 664 45 55',
        courses: ['ҰБТ'],
        subjects: ['Қазақстан тарихы', 'Оқу сауаттылығы', 'География'],
        group: 'ME-2',
        password: 'Бағлан Мырзабай',
        language: 'RU',
        sectionResult: '20 из 25',
        sectionPercentage: '75%',
        gender: 'm',
        grade: '8a',
        school: 'BIL',
        firm: 'educon',
        email: 'eduway@online.com'
    },
    {
        id: 3,
        firstName: 'Саят',
        lastName: 'Райқұл',
        mobile: '+7 776 664 45 55',
        courses: ['ҰБТ,БИЛ'],
        subjects: ['ҰБТ,БИЛ'],
        group: 'FE-1',
        password: 'Бағлан Мырзабай',
        language: 'RU',
        sectionResult: '20 из 25',
        sectionPercentage: '75%',
        gender: 'm',
        grade: '8a',
        school: 'BIL',
        firm: 'educon',
        email: 'eduway@online.com'
    },
    {
        id: 4,
        firstName: 'Әділет',
        lastName: 'Мырзабай',
        mobile: '+7 776 664 45 55',
        courses: ['ҰБТ'],
        subjects: ['Қазақстан тарихы', 'Оқу сауаттылығы', 'География'],
        group: 'FE-1',
        password: 'Бағлан Мырзабай',
        language: 'RU',
        sectionResult: '20 из 25',
        sectionPercentage: '75%',
        gender: 'm',
        grade: '8a',
        school: 'BIL',
        firm: 'educon',
        email: 'eduway@online.com'
    },
    {
        id: 5,
        firstName: 'Ерасыл',
        lastName: 'Аяпберген',
        mobile: '+7 776 664 45 55',
        courses: ['ҰБТ, БИЛ'],
        subjects: ['Қазақстан тарихы', 'Оқу сауаттылығы', 'География'],
        group: 'ME-2',
        password: 'Бағлан Мырзабай',
        language: 'RU',
        sectionResult: '20 из 25',
        sectionPercentage: '75%',
        gender: 'm',
        grade: '8a',
        school: 'BIL',
        firm: 'educon',
        email: 'eduway@online.com'
    },
]

export const fakeTeachers = [
    {
        id: 1,
        name: 'Сержан ',
        firstName: 'Сержан ',
        lastName: 'Арманов',
        mobile: '+7 776 664 45 55',
        roles: ['teacher', 'coordinator'],
        courses: ['ҰБТ'],
        subjects: ['Қазақстан тарих'],
        group: 'ME-2',
        password: 'Бағлан Мырзабай',
    },
    {
        id: 2,
        name: 'Бағлан',
        firstName: 'Бағлан',
        lastName: 'Әбдіхани',
        mobile: '+7 776 664 45 55',
        roles: ['teacher', 'coordinator'],
        courses: ['ҰБТ'],
        subjects: ['Математика'],
        group: 'ME-2',
        password: 'Бағлан Мырзабай',
    },
    {
        id: 3,
        name: 'Саят',
        firstName: 'Саят',
        lastName: 'Райқұл',
        mobile: '+7 776 664 45 55',
        roles: ['teacher'],
        courses: ['ҰБТ,БИЛ'],
        subjects: ['Оқу сауаттылығы'],
        group: 'FE-1',
        password: 'Бағлан Мырзабай',
    },
    {
        id: 4,
        name: 'Әділет',
        firstName: 'Әділет',
        lastName: 'Мырзабай',
        mobile: '+7 776 664 45 55',
        roles: ['teacher'],
        courses: ['ҰБТ'],
        subjects: ['География'],
        group: 'FE-1',
        password: 'Бағлан Мырзабай',
    },
    {
        id: 5,
        name: 'Ерасыл',
        firstName: 'Ерасыл',
        lastName: 'Аяпберген',
        mobile: '+7 776 664 45 55',
        roles: ['coordinator'],
        courses: ['ҰБТ, БИЛ'],
        subjects: ['Оқу сауаттылығы'],
        group: 'ME-2',
        password: 'Бағлан Мырзабай',
    },
]

export const fakeGroups = [
    {
        id: 1,
        title: 'МФР - 1',
        language: 'ru',
        numberOfStudents: 10,
        listOfCurators: [1, 2, 3],
        courseSubjectsIds: [1, 2, 3],
        curators: ['Бағлан Мырзабай', 'Ерасыл Аяпберген'],
        subjects: ['Қазақстан тарихы', 'Оқу сауаттылығы', 'География'],
    },
    {
        id: 2,
        title: 'МФК - 2',
        language: 'kz',
        numberOfStudents: 10,
        listOfCurators: [1, 2, 3],
        courseSubjectsIds: [1, 2, 3],
        curators: ['Бағлан Мырзабай', 'Ерасыл Аяпберген'],
        subjects: ['Қазақстан тарихы', 'Оқу сауаттылығы', 'География'],
    },
    {
        id: 3,
        title: 'МФР - 3',
        language: 'ru',
        numberOfStudents: 10,
        listOfCurators: [1, 2, 3],
        courseSubjectsIds: [1, 2, 3],
        curators: ['Бағлан Мырзабай', 'Ерасыл Аяпберген'],
        subjects: ['Қазақстан тарихы', 'Оқу сауаттылығы', 'География'],
    },
]

export const fakeSubjects = [
    {id: 1, title_kz: 'Оқу сауаттылығы', title_ru: 'Оқу сауаттылығы'},
    {
        id: 2,
        title_kz: 'Математикалық сауаттылық',
        title_ru: 'Математикалық сауаттылық',
    },
    {id: 3, title_kz: 'Қазақстан тарихы', title_ru: 'Қазақстан тарихы'},
    {id: 4, title_kz: 'Физика', title_ru: 'Физика'},
    {id: 5, title_kz: 'Математика', title_ru: 'Математика'},
    {id: 6, title_kz: 'Ағылшын тілі', title_ru: 'Ағылшын тілі'},
    {id: 7, title_kz: 'Дүние жүзі тарихы', title_ru: 'Дүние жүзі тарихы'},
    {id: 8, title_kz: 'География', title_ru: 'География'},
    {id: 9, title_kz: 'Орыс тілі', title_ru: 'Орыс тілі'},
    {id: 10, title_kz: 'Химия', title_ru: 'Химия'},
    {id: 11, title_kz: 'Биология', title_ru: 'Биология'},
    {id: 12, title_kz: 'Қазақ тілі', title_ru: 'Қазақ тілі'},
]
export const fakeCourses = [
    {
        id: 1,
        title: 'ENT',
        title_kz: 'ENT',
        title_ru: 'ENT',
        promo: true,
        subjects: true,
        discount: false,
        status: 'locked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: 'Ең мықты курс',
        price: '104 362 ₸',
        discountPercentage: '',
        discountedPrice: '104 362 ₸',
    },
    {
        id: 2,
        title: 'BIL',
        title_kz: 'BIL',
        title_ru: 'BIL',
        promo: false,
        subjects: true,
        discount: true,
        status: 'locked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: '5 пәннен құралған пакетті ал да 30% жеңілдікке қол жеткіз',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
    {
        id: 3,
        title: 'NIS',
        title_kz: 'NIS',
        title_ru: 'NIS',
        promo: true,
        subjects: true,
        discount: true,
        status: 'locked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: '30 қыркүйекке дейін  -50%',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
    {
        id: 4,
        title: 'ENT',
        title_kz: 'ENT',
        title_ru: 'ENT',
        promo: true,
        subjects: true,
        discount: false,
        status: 'unlocked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: 'Ең мықты курс',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
    {
        id: 5,
        title: 'BIL',
        title_kz: 'BIL',
        title_ru: 'BIL',
        promo: false,
        subjects: true,
        discount: true,
        status: 'unlocked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: 'Ең мықты курс',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
    {
        id: 6,
        title: 'NIS',
        title_kz: 'NIS',
        title_ru: 'NIS',
        promo: false,
        subjects: true,
        discount: false,
        status: 'locked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: 'Ең мықты курс',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
    {
        id: 7,
        title: 'ENT',
        title_kz: 'ENT',
        title_ru: 'ENT',
        promo: false,
        subjects: true,
        discount: true,
        status: 'locked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: 'Ең мықты курс',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
    {
        id: 8,
        title: 'NIS',
        title_kz: 'NIS',
        title_ru: 'NIS',
        promo: true,
        subjects: true,
        discount: true,
        status: 'locked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: 'Ең мықты курс',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
    {
        id: 9,
        title: 'NIS',
        title_kz: 'NIS',
        title_ru: 'NIS',
        promo: true,
        subjects: true,
        discount: true,
        status: 'locked',

        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарын таңдап ал да өзіңе ыңғайлы курс құрастыр. ',
        slogan: 'Ең мықты курс',
        price: '104 362 ₸',
        discountPercentage: '-30%',
        discountedPrice: '52 181 ₸',
    },
]

export const fakeSections = [
    {id: 1, type: 'video', title: 'Video 1', progress: 100},
    {id: 2, type: 'test', title: 'Тақырыптық тест - 1', progress: 70},
    {id: 3, type: 'video', title: 'Video 2', progress: 30},
    {id: 4, type: 'test', title: 'Тақырыптық тест - 2', progress: 10},
]

export const fakeGroupSubjects = [
    {
        id: 1,
        title_kz: 'Оқу сауаттылығы',
        title_ru: 'Оқу сауаттылығы',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 2,
        title_kz: 'Математикалық сауаттылық',
        title_ru: 'Математикалық сауаттылық',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 3,
        title_kz: 'Қазақстан тарихы',
        title_ru: 'Қазақстан тарихы',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 4,
        title_kz: 'Физика',
        title_ru: 'Физика',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 5,
        title_kz: 'Математика',
        title_ru: 'Математика',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 6,
        title_kz: 'Ағылшын тілі',
        title_ru: 'Ағылшын тілі',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 7,
        title_kz: 'Дүние жүзі тарихы',
        title_ru: 'Дүние жүзі тарихы',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 8,
        title_kz: 'География',
        title_ru: 'География',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 9,
        title_kz: 'Орыс тілі',
        title_ru: 'Орыс тілі',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 10,
        title_kz: 'Химия',
        title_ru: 'Химия',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 11,
        title_kz: 'Биология',
        title_ru: 'Биология',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
    {
        id: 12,
        title_kz: 'Қазақ тілі',
        title_ru: 'Қазақ тілі',
        teacher: 'Бағлан Мырзабай',
        comment: 'Басталу 15:00',
        course: 'ЕНТ',
        link: 'www.zoom.kz.com.ru.ua',
    },
]

export const fakeQuestions = [
    {
        id: 1,
        title: 'Это понятие , вводимое в механике для обозначения тела, которое рассматривается как точка, имеющая массу.',
        options: [
            {
                id: 1,
                name: 'Закон Ньютона',
                isCorrect: true,
                selected: true,
            },
            {
                id: 2,
                name: 'Геоцентрически система мира',
                isCorrect: false,
                selected: false,
            },
            {
                id: 3,
                name: 'Свободное падение тел',
                isCorrect: false,
                selected: false,
            },
            {
                id: 4,
                name: 'Закон Гравитации',
                isCorrect: false,
                selected: false,
            },
        ],
    },
    {
        id: 2,
        title: 'Это понятие , вводимое в механике для обозначения тела, которое рассматривается как точка, имеющая массу.',
        options: [
            {
                id: 1,
                name: 'Закон Ньютона',
                isCorrect: true,
                selected: false,
            },
            {
                id: 2,
                name: 'Геоцентрически система мира',
                isCorrect: false,
                selected: false,
            },
            {
                id: 3,
                name: 'Свободное падение тел',
                isCorrect: false,
                selected: true,
            },
            {
                id: 4,
                name: 'Закон Гравитации',
                isCorrect: false,
                selected: false,
            },
        ],
    },
    {
        id: 3,
        title: 'Это понятие , вводимое в механике для обозначения тела, которое рассматривается как точка, имеющая массу.',
        options: [
            {id: 1, name: 'Закон Ньютона', isCorrect: false, selected: false},
            {
                id: 2,
                name: 'Геоцентрически система мира',
                isCorrect: false,
                selected: false,
            },
            {
                id: 3,
                name: 'Свободное падение тел',
                isCorrect: false,
                selected: false,
            },
            {
                id: 4,
                name: 'Закон Гравитации',
                isCorrect: true,
                selected: true,
            },
        ],
    },
    {
        id: 4,
        title: 'Это понятие , вводимое в механике для обозначения тела, которое рассматривается как точка, имеющая массу.',
        options: [
            {id: 1, name: 'Закон Ньютона', isCorrect: false, selected: true},
            {
                id: 2,
                name: 'Геоцентрически система мира',
                isCorrect: false,
                selected: false,
            },
            {
                id: 3,
                name: 'Свободное падение тел',
                isCorrect: true,
                selected: false,
            },
            {
                id: 4,
                name: 'Закон Гравитации',
                isCorrect: false,
                selected: false,
            },
        ],
    },
]


export const NavBarContentText = [
    {
        title: "resources",
    },
    {
        title: "education",
    },
    {
        title: "works",
    },
    {
        title: "news",
    },
]
export const EducationContent = [
    {
        titleRu: null,
        titleEn: null,
        descriptionRu: null,
        descriptionEn: null,
        content: [
            {
                logo: TGLogo,
                titleRu: "Telegram: Contact @design_awards",
                titleEn: "Telegram: Contact @design_awards",
                descriptionRu: "Лучшие Сайты, брендинг и реклама со всего мира. Онлайн события и сервисы для дизайнеров: https://dsgners.ru<br/>Связь: @design_manager_bot",
                descriptionEn: "The best Websites, branding and advertising from all over the world. Online events and services for designers: https://dsgners.ru<br/>Contact: @design_manager_bot",
                link: "t.me/design_awards",
                photo: DewsignAwards,
            }
        ]
    },
     {
        titleRu: "Сайты для генерации градиентов",
        titleEn: null,
        descriptionRu: "Подборка сайтов для генерации градиентов. Также включили сервисы с готовыми наборами, которые можно отредактировать",
        descriptionEn: null,
        content: [
            {
                logo: GrabientLogo,
                titleRu: "Grabient",
                titleEn: "Grabient",
                descriptionRu: "Лучшие Сайты, брендинг и реклама со всего мира. Онлайн события и сервисы для дизайнеров: https://dsgners.ru<br/>Связь: @design_manager_bot",
                descriptionEn: "The best Websites, branding and advertising from all over the world. Online events and services for designers: https://dsgners.ru<br/>Contact: @design_manager_bot",
                link: "grabient.com",
                photo: Grabient,
            },
            {
                logo: GrabientLogo,
                titleRu: "Grabient",
                titleEn: "Grabient",
                descriptionRu: "Лучшие Сайты, брендинг и реклама со всего мира. Онлайн события и сервисы для дизайнеров: https://dsgners.ru<br/>Связь: @design_manager_bot",
                descriptionEn: "The best Websites, branding and advertising from all over the world. Online events and services for designers: https://dsgners.ru<br/>Contact: @design_manager_bot",
                link: "grabient.com",
                photo: Grabient,
            },
            {
                logo: GrabientLogo,
                titleRu: "Grabient",
                titleEn: "Grabient",
                descriptionRu: "Лучшие Сайты, брендинг и реклама со всего мира. Онлайн события и сервисы для дизайнеров: https://dsgners.ru<br/>Связь: @design_manager_bot",
                descriptionEn: "The best Websites, branding and advertising from all over the world. Online events and services for designers: https://dsgners.ru<br/>Contact: @design_manager_bot",
                link: "grabient.com",
                photo: Grabient,
            },

        ]
    },

]
export const FooterText = [
    {
        title: "About us (Impressum)",
    },
    {
        title: "Membership login",
    },
    {
        title: "Advertise",
    },
    {
        title: "Privacy policy",
    },
    {
        title: "Write for us",
    },
    {
        title: "Contact us",
    },
    {
        title: "Instagram",
    },
    {
        title: "Facebook",
    },
    {
        title: "Telegram",
    },

]
