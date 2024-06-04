import { string, ref, boolean, number, date, array, object } from 'yup'

export const isMobileNumber = (mobile) => {
    if (!mobile) {
        return false
    }

    const mobileNumbers = mobile.replace(/\D/g, '')

    return mobileNumbers.length === 11 ? true : false
}

export const requiredMobile = ({ formatMessage }) =>
    string().test(
        'test-mobile',
        formatMessage({
            id: 'isRequired',
            defaultMessage: 'This field is required.',
        }),
        (value) => isMobileNumber(value),
    )

export const requiredStringMinThree = ({ formatMessage }) =>
    string()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .min(
            3,
            formatMessage(
                {
                    id: 'inputMinLengthError',
                    defaultMessage:
                        'You must type  least { value } characters.',
                },
                { value: 3 },
            ),
        )

export const requiredStringMinFive = ({ formatMessage }) =>
    string()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .min(
            5,
            formatMessage(
                {
                    id: 'inputMinLengthError',
                    defaultMessage:
                        'You must type  least { value } characters.',
                },
                { value: 5 },
            ),
        )

export const requiredStringMinSix = ({ formatMessage }) =>
    string()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .min(
            6,
            formatMessage(
                {
                    id: 'inputMinLengthError',
                    defaultMessage:
                        'You must type  least { value } characters.',
                },
                { value: 6 },
            ),
        )
export const requiredEditorText = ({ formatMessage }) =>
    string()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .min(
            20,
            formatMessage(
                {
                    id: 'inputMinLengthError',
                    defaultMessage:
                        'You must type at least { value } characters.',
                },
                { value: 20 },
            ),
        )

// export const requiredStringMinThree = ({ formatMessage }) =>
//   string()
//     .required(
//       formatMessage({
//         id: "isRequired",
//         defaultMessage: "This field is required.",
//       }),
//     )
//     .min(
//       3,
//       formatMessage(
//         {
//           id: "inputMinLengthError",
//           defaultMessage: "You must type at least { value } characters.",
//         },
//         { value: 3 },
//       ),
//     )
//     .matches(
//       /^[a-zA-Z\s]*$/,
//       formatMessage({
//         id: "mustOnlyLetter",
//         defaultMessage: "Must contain only letter.",
//       }),
//     );

export const requiredObject = ({ formatMessage }) =>
    object().required(
        formatMessage({
            id: 'isRequired',
            defaultMessage: 'This field is required.',
        }),
    )

export const requiredString = ({ formatMessage }) =>
    string().required(
        formatMessage({
            id: 'isRequired',
            defaultMessage: 'This field is required.',
        }),
    )

export const isRequiredNumber = ({ formatMessage }) =>
    number(
        formatMessage({
            id: 'enterNumber',
            defaultMessage: 'Please enter a valid number',
        }),
    ).required(
        formatMessage({
            id: 'isRequired',
            defaultMessage: 'This field is required.',
        }),
    )

export const requiredId = ({ formatMessage }) =>
    number()
        .nullable()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )

export const requiredArray = ({ formatMessage }) =>
    array()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .min(
            1,
            formatMessage(
                {
                    id: 'mustOptionSelected',
                    defaultMessage: 'You must select at least { value } option',
                },
                { value: 1 },
            ),
        )

export const username = ({ formatMessage }) =>
    string()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .min(3)

export const email = ({ formatMessage }) =>
    string(
        formatMessage({
            id: 'enterEmail',
            defaultMessage: 'Please enter your email',
        }),
    )
        .email(
            formatMessage({
                id: 'enterValidEmail',
                defaultMessage: 'Enter a valid email',
            }),
        )
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )

export const password = ({ formatMessage }) =>
    string()
        .required(
            formatMessage({
                id: 'enterPassword',
                defaultMessage: 'Please enter your password',
            }),
        )
        .min(
            8,
            formatMessage(
                {
                    id: 'inputMinLengthError',
                    defaultMessage: 'Must Contain { value } Characters.',
                },
                { value: 8 },
            ),
        )

export const confirmPassword = ({ formatMessage }) =>
    string(
        formatMessage({
            id: 'confirm_password',
            defaultMessage: 'Confirm your password',
        }),
    ).when('password', (password, field) =>
        password
            ? field
                  .required(
                      formatMessage({
                          id: 'mustPasswordsMatch',
                          defaultMessage: 'Passwords must match',
                      }),
                  )
                  .oneOf(
                      [ref('password')],
                      formatMessage({
                          id: 'mustPasswordsMatch',
                          defaultMessage: 'Passwords must match',
                      }),
                  )
            : field,
    )

export const check = ({ formatMessage }) =>
    boolean().required(
        formatMessage({
            id: 'isRequired',
            defaultMessage: 'This field is required',
        }),
    )

export const phone = ({ formatMessage }) =>
    string().required(
        formatMessage({
            id: 'enterPhone',
            defaultMessage: 'Please enter your phone number',
        }),
    )

export const isBoolean = boolean()

export const isNumber = ({ formatMessage }) =>
    number()
        .typeError(
            formatMessage({
                id: 'enterNumber',
                defaultMessage: 'Please enter a valid number',
            }),
        )
        // .positive(
        //     formatMessage({
        //         id: 'mustBiggerThan0',
        //         defaultMessage: 'Must be bigger than 0',
        //     }),
        // )
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required',
            }),
        )

export const isPoint = ({ formatMessage }) =>
    number()
        .test(
            'isNumber',
            formatMessage({
                id: 'enterNumber',
                defaultMessage: 'Please enter a valid number',
            }),
            (val) => typeof val === 'number',
        )
        .test(
            'number',
            formatMessage({
                id: 'mustBiggerThan-1',
                defaultMessage: 'Must be bigger or equal than -1',
            }),
            (val) => val >= -1,
        )

export const isDate = ({ formatMessage }) =>
    date(
        formatMessage({
            id: 'enterDate',
            defaultMessage: 'Please enter a valid date',
        }),
    )
        .min(
            new Date('01/01/1900'),
            formatMessage({
                id: 'minDate',
            }),
        )
        .max(
            new Date('01/01/2100'),
            formatMessage({
                id: 'maxDate',
            }),
        )

export const isRequiredBoolean = ({ formatMessage }) =>
    boolean().required(
        formatMessage({
            id: 'isRequired',
            defaultMessage: 'This field is required.',
        }),
    )

export const isRequiredDate = ({ formatMessage }) =>
    date(
        formatMessage({
            id: 'enterDate',
            defaultMessage: 'Please enter a valid date',
        }),
    )
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .min(
            new Date('01/01/1900'),
            formatMessage({
                id: 'minDate',
            }),
        )
        .max(
            new Date('01/01/2100'),
            formatMessage({
                id: 'maxDate',
            }),
        )

export const isOptionValueRequired = ({ formatMessage }) =>
    object()
        .required(
            formatMessage({
                id: 'isRequired',
                defaultMessage: 'This field is required.',
            }),
        )
        .nullable()
