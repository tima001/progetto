export interface CourseState {
    id: number
    titleKz: string
    titleRu: string
    descriptionKz: string
    descriptionRu: string
    imageKz: string
    imageRu: string
}

export interface CourseUserDetailState {
    coursesTitleKz: string
    coursesTitleRu: string
    groupTitles: string
    languages: string
    maxEndDate: string
    userId: number
}

export interface ListResponse<T> {
    data: T[]
    pageNumber: number
    totalCount: number
    totalPages: number
}

export interface GroupSectionAnalysisState {
    title: string
    groupId: number
    testPercentage: number
    videoPercentage: number
}

export interface groupsForStudent {
    subjectIds: Array<number>
    languageEnum: string
}

export interface GroupState {
    id?: number
    title: string
    languageEnum: string
    curatorIds: Array<number>
    courseId: string | number
    subjects: Array<GroupSubjectState>
    readonly subjectsKz?: string
    readonly subjectsRu?: string
    studentCount?: number
}

export interface GroupSubjectState {
    id?: number
    teacherId: string | number
    lessonLink: string
    lessonComment: string
    courseSubjectId: string | number
    readonly subjectTitleKz?: string
    readonly subjectTitleRu?: string
    readonly courseTitleKz?: string
    readonly courseTitleRu?: string
}

export interface StudentGroupState {
    userId: number
    userCourseEnrollId: number
    courseSubjectIds: string
    courseId: number
    language: string
    readonly subjectsTitleRu: string
    readonly subjectsTitleKz: string
    readonly courseTitleKz: string
    readonly courseTitleRu: string
    readonly groupTitle: string
}

export interface StudentSectionAnalysisState {
    courseId: number
    userId: number
    firstName: string
    lastName: string
    title: string
    watchedVideoPercentage: number
    topicTestPercentage: number
}

export interface UserCourseState extends CourseState {
    courseId: number
    averagePercentage: number
    userCourseEnrollId: number
}

export interface UserSubjectState extends SubjectState {
    courseSubjectId: number
    averagePercentage: number
    lessonComment: string
    lessonLink: string
    userSubjectEnrollId: number
}

export interface UserTopicState {
    topicTitleKz: string
    topicTitleRu: string
    language: string
    countTest: number
    countVideo: number
    courseTopicId: number
    percentage: number
    userTopicEnrollId: number
}

export interface TeacherState {
    id?: number
    firstName: string
    lastName: string
    email: string
    mobile: string
    password?: string
    role: string
    subjectIds?: Array<number>
    subjects?: Array<SubjectState>
}
export interface ManagerState {
    id?: number
    firstName: string
    lastName: string
    email: string
    mobile: string
    password?: string
    role: string
}

export interface VideoLessonState {
    id?: number
    title: string
    link: string
    description: string
    duration: number
    isReady: boolean
    position: number
    courseTopicId: number
}

export interface TestState {
    id?: number
    title: string
    description: string
    duration: number
    isReady: boolean
    position: number
    courseTopicId: number
}

export interface TestQuestionState {
    topicTestId?: number
    questions: Array<QuestionState>
}

export interface QuestionState {
    id?: any
    questionId?: any
    content: string
    questionTypeEnum: string
    videoLink: string
    position: number
    answers: Array<AnswerState>
    percentage?: number
}

export interface AnswerState {
    id?: any
    answerId?: any
    content: string
    position: number
    correct: boolean
    isChecked?: boolean
}

export interface SectionAnalysisState {
    firstName: string
    lastName: string
    groupTitle: string
    result: number
    maxResult: number
    percentage: number
}

export interface SectionState {
    id: number
    title: string
    type: string
    position: number
    percentage: number
    userTopicEnrollId: number
}

export interface SectionDetailsState {
    id: number
    title: string
    description: string
    duration: number
    link: string
    position: number
    isReady: boolean
    isFinished: boolean
    countQuestions: number
    topicTestResultId: number
    type: string
    watchedVideoId: number
}

export interface StudentTestResultState {
    topicTestId: number
    topicTestResultId: number
    topicTestTitle: string
    duration: number
    countCorrect: number
    countWrong: number
    questions: QuestionState[]
}

export interface SubjectState {
    titleKz: string
    titleRu: string
    descriptionKz: string
    descriptionRu: string
    logo: string
    id?: number
}

export interface CourseSubjectState {
    id: number
    subject: SubjectState
    titleKz: string
    titleRu: string
    languages: Array<string>
}

export interface CourseSubjectDetailState {
    id: number
    logo: string
    subjectId: number
    subjectTitleKz: string
    subjectTitleRu: string
}

export interface TopicState {
    titleKz: string
    titleRu: string
    descriptionKz: string
    descriptionRu: string
    subject?: SubjectState
    subjectId?: number
    id?: number
}

export interface ActiveCourseTopicState {
    id?: number
    titleKz: string
    titleRu: string
    courseTopicId: number
    language: string
    position: number
    testCount: number
    videoCount: number
}

export interface StudentState {
    id?: number
    firstName: string
    lastName: string
    email: string,
    phone: string,
    password: string,
    type: string
}

export interface StudentRegisterState extends StudentState {
    email: string
    confirmPassword: string
}

export interface CourseUserState extends StudentState {
    id?: number
    courseSubjectIds: Array<number>
    languageEnum: string
    startDate: Date
    endDate: Date
    studentGroupId: string | number
    courseId: string | number
}

export interface CourseUserEnrollDetailState extends CourseState {
    id: number
    courseId: number
    courseSubjectIds: string
    groupId: number
    groupTitle: number
    startDate: Date
    endDate: Date
    language: string
    subjectsTitleKz: string
    subjectsTitleRu: string
    averagePercentage: number
}

export interface CuratorStudentState
    extends StudentState,
        CourseUserDetailState {}

export interface TopicSectionAnalysisState {
    courseTopicId: number
    topicTitleKz: string
    topicTitleRu: string
    percentage: number
}

export interface VideoAnalysisState extends TopicSectionAnalysisState {
    countVideo: number
}

export interface TestAnalysisState extends TopicSectionAnalysisState {
    countTest: number
    countTestResults: number
}

export interface WatchedVideoLessonState {
    videoLessonId: number
    title: string
    watchedVideoCount: number
    percentage: number
}

export interface PassedTestState {
    title: string
    topicTestId: number
    percentage: number
}

export interface WatchedVideoLessonTimeState {
    videoLessonId: number
    visitedDateAndTime: Date
    watchedVideoTime: number
}

export interface StartWatchVideoLessonState {
    videoLessonId: number
    userTopicEnrollId: number
    watchedVideoId: number
    startedAt: number
    watchedVideoDataId?: number
}

export interface TopicVideoPercentageState {
    topicEnrollPercentage: number
    watchedVideoPercentage: number
}

export interface CoursePriceState {
    id?: number
    titleKz: string
    titleRu: string
    sloganKz: string
    sloganRu: string
    courseId: number
    optimalPrice: number
    duration: number
}

export interface CoursePurchaseState extends CoursePriceState {
    promotionId: number
    price: number
    discount: number
    discountSloganKz: string
    discountSloganRu: string
    endTime: Date
}

export interface CoursePriceDetailsState
    extends CoursePriceState,
        CoursePurchaseState {
    countDiscountPackages: number
    countPromotions: number
    countSubjects: number
    isActive: boolean
}

export interface CourseSubjectPriceState {
    id?: number
    sloganKz: string
    sloganRu: string
    courseSubjectId: number
    coursePriceId: number
    singleTopicPrice: number
    price: number
}

export interface CourseSubjectPricePurchaseState {
    id: number
    coursePriceId: number
    courseSubjectId: number
    price: number
    singleTopicPrice: number
    discount: number
    discountPrice: number
    isPurchased: boolean
}

export interface CoursePromotionState {
    id?: number
    sloganKz: string
    sloganRu: string
    startTime: Date
    endTime: Date
    coursePriceId: number
    discount: number
}

export interface CoursePackageState {
    id?: number
    sloganKz: string
    sloganRu: string
    coursePriceId: number
    discount: number
    subjectCount: number
}

export interface PaginationState {
    size: number
    page: number
}

export interface SelectedPurchaseSubjectState extends SubjectState {
    courseSubjectId: number
    isSelected: boolean
}

export interface PriceState {
    totalPrice: number
    purchasePrice: number
    discountPrice: number
}

export interface PurchasedCourseTopicState extends ActiveCourseTopicState {
    isPurchased: boolean
}

export interface PurchaseState {
    coursePrice: CoursePriceState
    coursePackageDiscounts: CoursePackageState[]
    coursePromotion: CoursePromotionState
    courseSubjectIds: number[]
    courseSubjectPrices: CourseSubjectPricePurchaseState[]
}

export interface getCourseSubjectPricesParams {
    courseSubjectPriceId: number
    topicCount: number
    courseTopicIds: number[]
}

export interface sidebarLink {
    id: number
    title: string
    path: string
    allowedRoles: string[]
}
