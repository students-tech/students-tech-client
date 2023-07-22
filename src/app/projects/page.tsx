'use client'

import axios from 'axios'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React, { useEffect, useState } from "react"

interface dialogueInterface {
    message: string
}

const StubotDialog: React.FC<dialogueInterface> = ({ message }) => {
    return (
        <div className="flex items-end mb-8">
            <div className="rounded-full bg-[#343A40] w-12 h-12 text-[#FFFFFF] flex justify-center items-center">
                SB
            </div>
            <div className="rounded-lg bg-[#DEE2E6] ml-5 p-5 max-w-[67%]">
                {message}
            </div>
        </div>
    )
}

const ClientDialog: React.FC<dialogueInterface> = ({ message }) => {
    return (
        <div className="flex items-end justify-end mb-8">
            <div className="rounded-lg bg-[#D3E7FF] mr-5 p-5 max-w-[67%]">
                {message}
            </div>
            <div className="rounded-full bg-[#507EFF] w-12 h-12 text-[#FFFFFF] flex justify-center items-center">
                DN
            </div>
        </div>
    )
}

const Project = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [step, setStep] = useState(1);
    const [prompt, setPrompt] = useState("");
    const [listPrompt, setListPrompt] = useState([]);

    const [sendState, setSendState] = useState(true);
    const gptPrompt = {
        "role": "user",
        "content": "Act as a PM from software agency, please ask for the project requirements from the client with the following template: 1. Firstly, please ask about project description that you want to build 2. If the user is not given the platform of choice (e.g: Mobile, Web, or Design only) please ask them specifically what platform that they want to build 3. Then please ask the specific tech stack (e.g: Golang, Java) 4. After that, please ask about project objective 5. Then ask about is project have the design ready? 6. Finally ask about budget range and timeline range 7. Please summarize the answer by this data: Platform, Tech Stack, Project Objective, Is have design ready, budget and timeline range Please ask each questions one by one (sequentially) in a conversational/interactive manner and wait for the next prompt as the client's response. Please ask each question until it all is already answered. If it is not answered please ask the question again and again. Start the convo with 'Please describe what digital solutions that you need' and response like a PM go directly into your response–no pre-response. You don't need to summarize it back to the client, just end the series of questions with something like are there any more details you want to provide and after all is clear from the client-side, say thanks to the client and close it with I am Stubot from students.tech"
    };

    useEffect(() => {
        let tempList = []
        const payload = {
            "messages": [{
                "role": "user",
                "content": "Act as a PM from software agency, please ask for the project requirements from the client with the following template: 1. Firstly, please ask about project description that you want to build 2. If the user is not given the platform of choice (e.g: Mobile, Web, or Design only) please ask them specifically what platform that they want to build 3. Then please ask the specific tech stack (e.g: Golang, Java) 4. After that, please ask about project objective 5. Then ask about is project have the design ready? 6. Finally ask about budget range and timeline range 7. Please summarize the answer by this data: Platform, Tech Stack, Project Objective, Is have design ready, budget and timeline range Please ask each questions one by one (sequentially) in a conversational/interactive manner and wait for the next prompt as the client's response. Please ask each question until it all is already answered. If it is not answered please ask the question again and again. Start the convo with 'Please describe what digital solutions that you need' and response like a PM go directly into your response–no pre-response. You don't need to summarize it back to the client, just end the series of questions with something like are there any more details you want to provide and after all is clear from the client-side, say thanks to the client and close it with I am Stubot from students.tech"
            }]
        };

        axios.post(`https://students-tech-server-s7htybhruq-as.a.run.app/project/completion`, payload)
            .then(function (res) {
                tempList.push(gptPrompt)
                tempList.push(res?.data?.data?.message)
                setListPrompt(tempList)
                console.log(listPrompt)
            })
    }, [])


    useEffect(() => {
        let tempList = []
        if (listPrompt[0] !== "") {
            tempList = listPrompt;
        }

        if (prompt !== "") {
            tempList.push(
                {
                    "role": "user",
                    "content": prompt
                }
            );
            setPrompt("");
            axios.post(`https://students-tech-server-s7htybhruq-as.a.run.app/project/completion`, { "messages": listPrompt })
                .then(function (res) {
                    console.log(res)
                    tempList.push(res?.data?.data?.message)
                })
            setListPrompt(tempList);
            console.log(listPrompt);
        }
    }, [sendState, listPrompt]);



    return (
        <div>
            {step === 1 &&
                <div className="w-screen min-h-screen flex items-center justify-center py-10">
                    <Card className="p-5 w-80">
                        <CardHeader>
                            <CardTitle>Welcome! 👩‍💻</CardTitle>
                            <CardDescription className="mt-2">Tell us more about your project </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-5">
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">What's your project name?</Label>
                                        <Input
                                            id="project_name"
                                            name="project_name"
                                            type="text"
                                            required={true}
                                            placeholder="Porject Morpheus"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Project Owner's Email...</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="text"
                                                required={true}
                                                placeholder="someone@mail.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">And phone number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="text"
                                                required={true}
                                                placeholder="+628-xxxx-xxxx-xx"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button onClick={() => { setStep(2) }}>Next</Button>
                        </CardFooter>
                    </Card>
                </div>}
            {step === 2 &&
                <div>
                    <div className="py-5 px-5 w-screen bg-[#F8F9FA] flex justify-center items-center">
                        <div className="font-semibold text-lg">
                            Stubot
                        </div>
                    </div>
                    <div className="mx-5 mt-5 pb-20">
                        {listPrompt?.map((message, index) => (
                            message?.role == "assistant" ? (
                                <div>
                                    <StubotDialog message={message.content} />
                                </div>
                            ) : (index > 0 &&
                                <ClientDialog message={message.content} />
                            )
                        ))}
                    </div>
                    <div className="p-5 flex bg-[#F8F9FA] fixed w-screen bottom-0">
                        <Input
                            id="user-prompt"
                            name="user-prompt"
                            value={prompt}
                            type="text"
                            onChange={(e) => { setPrompt(e.target.value) }}
                        />
                        <Button
                            className="ml-5"
                            onClick={() => {
                                setSendState(!sendState)
                            }}
                        >send</Button>
                    </div>
                </div>}
            {step === 3 && <div>
                {/*form validation here*/}
            </div>
            }
        </div>
    )
}

export default Project;