import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import {
    CallbackInput,
    ContactsContent,
    ContactsForm,
    ContactsText,
    ContactsTitle,
    ContactsWrapper,
    FlexBox,
    InputTextInput,
    SectionContainer,
} from '../style'

const Contacts = () => {
    return (
        <SectionContainer>
            <ContactsWrapper>
                <ContactsContent>
                    <ContactsTitle>өтінім қалдырыңыз</ContactsTitle>
                    <ContactsText>
                        тағы да сұрақтарыңыз болса өтініш қалдырыңыз біз барлық
                        сұрақтарыңызға жауап береміз
                    </ContactsText>
                </ContactsContent>
                <ContactsForm>
                    <CallbackInput>
                        <InputTextInput
                            type="text"
                            placeholder="сіздің аты-жөніңіз"
                        />
                        <InputTextInput
                            type="text"
                            aria-label="сіздің телефон нөміріңіз"
                            placeholder="сіздің телефон нөміріңіз"
                        />
                        <Button
                            size="large"
                            variant={'contained'}
                            fullWidth={true}
                        >
                            өтінішті жіберу
                        </Button>
                    </CallbackInput>
                </ContactsForm>
            </ContactsWrapper>
        </SectionContainer>
    )
}

export default Contacts
