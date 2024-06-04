import physics from '../assets/img/landing/teacher/physics-teacher.png'
import math from '../assets/img/landing/teacher/math-teacher.png'
import history from '../assets/img/landing/teacher/history-teacher.png'
import firstParent from '../assets/img/landing/review-ava/parent1.png'
import secondParent from '../assets/img/landing/review-ava/parent2.png'
import thirdParent from '../assets/img/landing/review-ava/parent3.png'
import fourthParent from '../assets/img/landing/review-ava/parent4.png'
import fifthParent from '../assets/img/landing/review-ava/parent5.png'
import sixthParent from '../assets/img/landing/review-ava/parent6.png'
import seventhParent from '../assets/img/landing/review-ava/parent7.png'
import firstStudent from '../assets/img/landing/review-ava/student1.png'
import secondStudent from '../assets/img/landing/review-ava/student2.png'
import thirdStudent from '../assets/img/landing/review-ava/student3.png'
import fourthStudent from '../assets/img/landing/review-ava/student4.png'
import fifthStudent from '../assets/img/landing/review-ava/student5.png'
import sixthStudent from '../assets/img/landing/review-ava/student6.png'
import seventhStudent from '../assets/img/landing/review-ava/student7.png'
import { sidebarLink } from '../features/types'

export const Lorum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc maecenas dignissim non ultrices turpis felis. Pulvinar odio in lobortis semper tellus pharetra, aenean odio sed. Tempor, sit risus pretium pretium, eleifend enim. Amet eget sem volutpat tortor mattis ut tincidunt est. Urna volutpat semper morbi neque consectetur aliquet tellus. Egestas id etiam mi lacus in hendrerit scelerisque sed. Enim volutpat sem mattis pretium. Tristique morbi imperdiet vitae volutpat viverra in. Sed at lobortis sagittis, ullamcorper platea dictum curabitur viverra sit.'

export const REACT_APP_IAM_SERVICE_BASE_URL =
    'https://educon-online-iam-service.azurewebsites.net/api'

export const REACT_APP_ONLINE_COURSE_BASE_URL =
    'https://educon-online-course-service.azurewebsites.net/api'

export const REACT_APP_STUDENT_COURSE_BASE_URL =
    'https://educon-online-student-course-service.azurewebsites.net/api'

export const ALPHABET = [
    { id: '1', name: 'A' },
    { id: '2', name: 'B' },
    { id: '3', name: 'C' },
    { id: '4', name: 'D' },
    { id: '5', name: 'E' },
    { id: '6', name: 'F' },
    { id: '7', name: 'G' },
    { id: '8', name: 'H' },
    { id: '9', name: 'I' },
    { id: '10', name: 'J' },
    { id: '11', name: 'K' },
    { id: '12', name: 'L' },
    { id: '13', name: 'M' },
    { id: '14', name: 'N' },
    { id: '15', name: 'O' },
    { id: '16', name: 'P' },
    { id: '17', name: 'Q' },
    { id: '18', name: 'R' },
    { id: '19', name: 'S' },
    { id: '20', name: 'T' },
    { id: '21', name: 'U' },
    { id: '22', name: 'V' },
    { id: '23', name: 'W' },
    { id: '24', name: 'X' },
    { id: '25', name: 'Y' },
    { id: '26', name: 'Z' },
]

export const LANGUAGES = [
    { id: 'KZ', name: 'KZ' },
    { id: 'RU', name: 'RU' },
]

export const VIDEO = 'VIDEO'

export const TEST = 'TEST'

export const MODERATOR = 'MODERATOR'

export const SELLER = 'SELLER'

export const CURATOR = 'CURATOR'

export const TEACHER = 'TEACHER'

export const SUPER_ADMIN = 'SUPER_ADMIN'

export const STUDENT = 'STUDENT'

export const sidebarLinks = ({ formatMessage }): sidebarLink[] => [
    {
        id: 1,
        title: formatMessage({ id: 'courses' }),
        path: '/courses',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 2,
        title: formatMessage({ id: 'price' }),
        path: '/price',
        allowedRoles: [MODERATOR],
    },
    {
        id: 3,
        title: formatMessage({ id: 'subjects' }),
        path: '/subjects',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 4,
        title: formatMessage({ id: 'students' }),
        path: '/students',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 5,
        title: formatMessage({ id: 'allGroups' }),
        path: '/groups',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 6,
        title: formatMessage({ id: 'teachers' }),
        path: '/teachers',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 7,
        title: formatMessage({ id: 'managers' }),
        path: '/managers',
        allowedRoles: [SUPER_ADMIN, MODERATOR],
    },
    {
        id: 8,
        title: formatMessage({ id: 'myCourses' }),
        path: '/my-courses',
        allowedRoles: [STUDENT],
    },
    {
        id: 9,
        title: formatMessage({ id: 'purchase' }),
        path: '/buy-course',
        allowedRoles: [STUDENT],
    },
    {
        id: 10,
        title: formatMessage({ id: 'myCourses' }),
        path: '/teacher-courses',
        allowedRoles: [TEACHER],
    },
    {
        id: 11,
        title: formatMessage({ id: 'Students' }),
        path: '/curator/students',
        allowedRoles: [CURATOR],
    },
    {
        id: 12,
        title: formatMessage({ id: 'Groups' }),
        path: '/curator/groups',
        allowedRoles: [CURATOR],
    },
    {
        id: 13,
        title: formatMessage({ id: 'examAnalysis' }),
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
    { id: 1, title_kz: 'Оқу сауаттылығы', title_ru: 'Оқу сауаттылығы' },
    {
        id: 2,
        title_kz: 'Математикалық сауаттылық',
        title_ru: 'Математикалық сауаттылық',
    },
    { id: 3, title_kz: 'Қазақстан тарихы', title_ru: 'Қазақстан тарихы' },
    { id: 4, title_kz: 'Физика', title_ru: 'Физика' },
    { id: 5, title_kz: 'Математика', title_ru: 'Математика' },
    { id: 6, title_kz: 'Ағылшын тілі', title_ru: 'Ағылшын тілі' },
    { id: 7, title_kz: 'Дүние жүзі тарихы', title_ru: 'Дүние жүзі тарихы' },
    { id: 8, title_kz: 'География', title_ru: 'География' },
    { id: 9, title_kz: 'Орыс тілі', title_ru: 'Орыс тілі' },
    { id: 10, title_kz: 'Химия', title_ru: 'Химия' },
    { id: 11, title_kz: 'Биология', title_ru: 'Биология' },
    { id: 12, title_kz: 'Қазақ тілі', title_ru: 'Қазақ тілі' },
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
    { id: 1, type: 'video', title: 'Video 1', progress: 100 },
    { id: 2, type: 'test', title: 'Тақырыптық тест - 1', progress: 70 },
    { id: 3, type: 'video', title: 'Video 2', progress: 30 },
    { id: 4, type: 'test', title: 'Тақырыптық тест - 2', progress: 10 },
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
            { id: 1, name: 'Закон Ньютона', isCorrect: false, selected: false },
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
            { id: 1, name: 'Закон Ньютона', isCorrect: false, selected: true },
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

export const TeacherInfo = [
    {
        id: 1,
        name: 'Темирлан Исмаилов',
        buttonText: 'Физика',
        university: 'Сүлеймен Демирел университеті түлегі',
        img: physics,
    },
    {
        id: 2,
        name: 'Ерлан Арманов',
        buttonText: 'Қазақстан тарих',
        university: 'Қ. Жұбанов атындағы Ақтөбе өңірлік университетінің түлегі',
        img: history,
    },
    {
        id: 3,
        name: 'Адема Болатова',
        buttonText: 'Литература',
        university: 'Назарбаев университеті түлегі',
        img: math,
    },
    {
        id: 4,
        name: 'Айқын Есенов',
        buttonText: 'Биология',
        university:
            'Абай атындағы Қазақ ұлттық педагогикалық университетінің түлегі',
        img: physics,
    },
    {
        id: 5,
        name: 'Аслан Братан',
        buttonText: 'Орыс тілі',
        university: 'Қазақ ұлттық қыздар педагогикалық университетінің түлегі',
        img: physics,
    },
    {
        id: 6,
        name: 'Дина Серік',
        buttonText: 'Ағылшын тілі',
        university:
            'Құрманғазы атындағы Қазақ ұлттық консерваториясының түлегі',
        img: math,
    },
    {
        id: 7,
        name: 'Айлин Қырқия',
        buttonText: 'Математика',
        university:
            'Т. Жүргенов атындағы Қазақ ұлттық өнер академиясының түлегі',
        img: math,
    },
    {
        id: 8,
        name: 'Гүлімай Арманова',
        buttonText: 'Химия',
        university:
            'Қ.И. Сәтбаев атындағы Қазақ ұлттық техникалық зерттеу университет түлегі',
        img: history,
    },
    {
        id: 9,
        name: 'Дана Орынбек',
        buttonText: 'Дүниежүзі тарих',
        university: 'Қазақ Ұлттық Аграрлық Зерттеу Университет түлегі',
        img: math,
    },
    {
        id: 10,
        name: 'Айерке Жахаева',
        buttonText: 'Информатика',
        university:
            'Л.Н. Гумилев атындағы Еуразия ұлттық зерттеу университет түлегі',
        img: history,
    },
    {
        id: 11,
        name: 'Айбек Ерлан',
        buttonText: 'география',
        university: 'Әл-Фараби атындағы Қазақ ұлттық университет түлегі',
        img: physics,
    },
]

export const ParentContent = [
    {
        id: 1,
        name: 'Гульвира Армановна',
        img: firstParent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 2,
        name: 'Светлана Балаева',
        img: secondParent,
        text: 'Мұнда жаттығу туралы шешім ең жақсылардың бірі болды!!! Емтихан үшін барлық қажетті ақпаратты алатыныңызға сенімді болыңыз, үй тапсырмасының көп мөлшерімен хош иістендірілген, бәрін сіздің басыңызға дәл бекіту үшін Али Ира өте қарапайым, түсінікті және одан өте қызықты, содан кейін Сіз бұл туралы көбірек біле аласыз. тәжірибеде Филден (ешқашан тәжірибені жіберіп алмаңыз, бұл өте маңызды және керемет оқытудың бір бөлігі).',
    },
    {
        id: 3,
        name: 'Дүйсен Армановна',
        img: thirdParent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 4,
        name: 'Сәндікүл Армановна',
        img: fourthParent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 5,
        name: 'Мағрипа Армановна',
        img: fifthParent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 6,
        name: 'Мұрат Ермеков',
        img: sixthParent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 7,
        name: 'Қанат Нұрлан',
        img: seventhParent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
]

export const StudentContent = [
    {
        id: 1,
        name: 'Арина',
        ball: 'ҰБТ 130 балл иегері',
        img: firstStudent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 2,
        name: 'Аслан',
        ball: 'ҰБТ 110 балл иегері',
        img: secondStudent,
        text: 'Мұнда жаттығу туралы шешім ең жақсылардың бірі болды!!! Емтихан үшін барлық қажетті ақпаратты алатыныңызға сенімді болыңыз, үй тапсырмасының көп мөлшерімен хош иістендірілген, бәрін сіздің басыңызға дәл бекіту үшін Али Ира өте қарапайым, түсінікті және одан өте қызықты, содан кейін Сіз бұл туралы көбірек біле аласыз. тәжірибеде Филден (ешқашан тәжірибені жіберіп алмаңыз, бұл өте маңызды және керемет оқытудың бір бөлігі).',
    },
    {
        id: 3,
        name: 'Арман',
        ball: 'ҰБТ 130 балл иегері',
        img: thirdStudent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 4,
        name: 'Марита',
        ball: 'ҰБТ 125 балл иегері',
        img: fourthStudent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 5,
        name: 'Камшат',
        ball: 'ҰБТ 130 балл иегері',
        img: fifthStudent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 6,
        name: 'Аружан',
        ball: 'ҰБТ 100 балл иегері',
        img: sixthStudent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
    {
        id: 7,
        name: 'Алмат',
        ball: 'ҰБТ 130 балл иегері',
        img: seventhStudent,
        text: 'Қызықты және сапалы дайындық үшін EduOnline онлайн курсына көп рахмет! Ең бастысы, емтиханға дайындық жоспарын құруға уақыт жұмсаудың қажеті жоқ. Жоспар беріледі, оны сапалы орындау қалады. Егер бос уақыт қалса, қосымша мақалалар, тереңірек зерттеу үшін тақырыптар әрқашан ұсынылады. Сценарий форматы материалдарды дайындауға, қайталауға және есте сақтауға көп көмектеседі. Марк пен Даниелдің әзілдері мен оңай қол жетімді тәсілі күрделі тақырыптарды көрмеуге мүмкіндік береді, өйткені олар түсіндірілгеннен кейін бәрі түсінікті болады. Егер Мен әлі де бірдеңе түсінбеген болсам, онда сіз бәрін егжей-тегжейлі түсіндіретін тәлімгерден сұрай аласыз. Сабақтың әртүрлі форматтары дайындыққа деген қызығушылықтың төмендеуіне жол бермеді. Мен әрқашан дайындыққа қуанышпен уақыт бөлдім.',
    },
]

export const FeaturesDescription = [
    {
        id: 1,
        title: 'тікелей эфирде сабақтар',
        videolink: 'https://youtu.be/yX5hmDCPlEY',
        desription:
            'Емтиханға дайындық үшін арнайы жасалған. Әр студенттің кестесі, вебинарлары, үй тапсырмасы және кері байланысы, статистикасы және барлық қажетті материалдары бар жеке кабинеті бар. Телефоннан және компьютерден үйрену ыңғайлы.',
    },
    {
        id: 2,
        title: 'Видеосабақтарға 24/7 қолжетімділік',
        videolink: 'https://youtu.be/2VgwEp9Q7Ew',
        desription:
            'Видеосабақтарға 24/7 қолжетімділік туралы информация тұратын жер. ',
    },
    {
        id: 3,
        title: 'Тақырыптық тесттер',
        videolink: 'https://youtu.be/6gpkU1cVTko',
        desription: 'Тақырыптық туралы информация тұратын жер.',
    },
    {
        id: 4,
        title: 'Үй тапсырмалары',
        videolink: 'https://youtu.be/RZf_GV9oSXk',
        desription: 'Үй тапсырмалары туралы информация тұратын жер.',
    },
    {
        id: 5,
        title: 'Қатемен жұмыс',
        videolink: 'https://youtu.be/y1hsnH6zIiE',
        desription: 'Қатемен жұмыс туралы информация тұратын жер.',
    },
    {
        id: 6,
        title: 'Байқау сынақтары',
        videolink: 'https://youtu.be/ZNMxIJzveWI',
        desription: 'Байқау сынақтары туралы информация тұратын жер.',
    },
    {
        id: 7,
        title: 'Жеке платформа',
        videolink: 'https://youtu.be/z51SSiMrbYE',
        desription: 'Жеке платформа туралы информация тұратын жер.',
    },
    {
        id: 8,
        title: 'Куратор',
        videolink: 'https://youtu.be/z51SSiMrbYE',
        desription: 'Куратор туралы информация тұратын жер.',
    },
    {
        id: 9,
        title: 'Профориентолог және психолог мамандар',
        videolink: 'https://youtu.be/z51SSiMrbYE',
        desription:
            'Профориентолог және психолог мамандар туралы информация тұратын жер.',
    },
]

export const PricelistCourseCards = [
    {
        title: 'ҰБТ курсы',
        price: '54 000тг',
        label: 'Ең мықты курс',
        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарынтаңдап ал да өзіңе ыңғайлы курс құрастыр.',
        listItems: [
            'видео сабақтар',
            'тақырыптық тесттер',
            'қатемен жұмыс',
            '12 ай',
            'сұрақтардың видео шешімі',
            'прогресс анализі',
        ],
    },
    {
        title: 'БИЛ курсы',
        price: '50 000тг',
        label: '50% жеңілдік',
        startDate: '30 қыркүйекке дейін',
        description:
            '12 ай ішінде ҰБТ-ға дайындалып грантқа түс. Кез келген пәнді және оның тақырыптарынтаңдап ал да өзіңе ыңғайлы курс құрастыр.',
        listItems: [
            'видео сабақтар',
            'тақырыптық тесттер',
            'қатемен жұмыс',
            '12 ай',
            'сұрақтардың видео шешімі',
            'прогресс анализі',
        ],
    },
]
