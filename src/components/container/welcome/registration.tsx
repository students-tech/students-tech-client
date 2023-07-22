'use-client'

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardFooter
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useState, useEffect } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

import { ROLE, COURSEWORK } from "./const"


const Registration = () => {
    const [page, setPage] = useState(1);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [temporary, setTemporaryValue] = useState("");

    const [hasStudentMail, setStudentMail] = useState(true);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [gitlab, setGitlab] = useState("");
    const [semester, setSemester] = useState("");
    const [project, setProject] = useState(false);
    const [projectNumber, setProjectnumber] = useState("0");
    const [university, setUniversity] = useState("");
    const [major, setMajor] = useState("");
    const [coursework, setCoursework] = useState([]);
    const [availability, setAvailability] = useState("1-3");
    const [role, setRole] = useState([]);
    const [tech, setTechh] = useState([]);

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                setSelectedCountry(data.userSelectValue);
                console.log(countries)
            });
    }, []);

    return (
        <div className="w-screen min-h-screen flex items-center justify-center py-10">
            {page === 1 ? (
                <Card className="p-5 w-80">
                    <CardTitle>
                        Tell us more! 😄
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Let us know more about yourself
                    </CardDescription>
                    <CardContent className="p-0 mt-5">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">What's your full name?</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required={true}
                                        placeholder="My name is..."
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="address">Where do you live?</Label>
                                    <Input
                                        id="address"
                                        placeholder="I live in..."
                                        name="address"
                                        type="text"
                                        required={true}
                                        value={address}
                                        onChange={(e) => {

                                            setAddress(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-end mt-4 p-0">
                        <Button className="bg-[#0114D6]" onClick={() => { setPage(2) }}>Next</Button>
                    </CardFooter>
                </Card>
            ) : page === 2 ? (
                <Card className="p-5 w-80">
                    <CardTitle>
                        Let's keep in touch 🤙
                    </CardTitle>
                    <CardDescription className="mt-2">
                        How should we reach you?
                    </CardDescription>
                    <CardContent className="p-0 mt-5">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="phone-number">We need your number</Label>
                                    <Input
                                        id="phone"
                                        placeholder="+62"
                                        name="phone"
                                        type="text"
                                        required={true}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="phone-number">Do you have any student email?</Label>
                                    <RadioGroup defaultValue={hasStudentMail}>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value={true}
                                                id="r2"
                                                onClick={() => { setStudentMail(true) }}
                                            />
                                            <Label htmlFor="r2">Yes</Label>
                                        </div>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value={false}
                                                id="r1"
                                                onClick={() => { setStudentMail(false) }}
                                            />
                                            <Label htmlFor="r1">No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">We also need your email</Label>
                                    <Input
                                        id="email"
                                        placeholder="sudtech@uni.ac.id"
                                        name="email"
                                        type="text"
                                        required={true}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {!hasStudentMail &&
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="student-id">We need to verify that you are a student, please upload your student ID</Label>
                                        <Input
                                            id="student-id"
                                            placeholder="https://linkedin.com/in/yourname"
                                            name="student-id"
                                            type="file"
                                            required={!hasStudentMail}
                                        // value={linkedin}
                                        // onChange={(e) => setLinkedin(e.target.value)}
                                        />
                                    </div>}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="linkedind">Are you on linkedin?</Label>
                                    <Input
                                        id="linkedind"
                                        placeholder="https://linkedin.com/in/yourname"
                                        name="linkedin"
                                        type="text"
                                        required={false}
                                        value={linkedin}
                                        onChange={(e) => setLinkedin(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="github">Do you have any github account?</Label>
                                    <Input
                                        id="github"
                                        placeholder="StudTech"
                                        name="github"
                                        type="text"
                                        required={false}
                                        value={github}
                                        onChange={(e) => setGithub(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="gitlab">Or any gitlab account?</Label>
                                    <Input
                                        id="gitlab"
                                        placeholder="StudTech"
                                        name="gitlab"
                                        type="text"
                                        required={false}
                                        value={gitlab}
                                        onChange={(e) => setGitlab(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-4 p-0">
                        <Button onClick={() => { setPage(1) }}>Back</Button>
                        <Button className="bg-[#0114D6]" onClick={() => { setPage(3) }}>Next</Button>
                    </CardFooter>
                </Card>
            ) : page === 3 ? (
                <Card className="p-5 w-80">
                    <CardTitle>
                        Tell us your works! 👩‍💻
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Show off your previous projects with us
                    </CardDescription>
                    <CardContent className="p-0 mt-5">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="project">Do you have any prior project?</Label>
                                    <RadioGroup defaultValue={project}>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value={false}
                                                id="r1"
                                                onClick={() => { setProject(false); setProjectnumber("0") }}
                                            />
                                            <Label htmlFor="r1">No</Label>
                                        </div>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value={true}
                                                id="r2"
                                                onClick={() => { setProject(true); setProjectnumber("1-3") }}
                                            />
                                            <Label htmlFor="r2">Yes</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                {project && (
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="project_number">How many projects have you done?</Label>
                                        <RadioGroup defaultValue={projectNumber}>
                                            <div className="flex items-center mt-2 space-x-3">
                                                <RadioGroupItem
                                                    value="1-3"
                                                    id="r1"
                                                    onClick={() => setProjectnumber("1-3")}
                                                />
                                                <Label htmlFor="r1">1-3</Label>
                                            </div>
                                            <div className="flex items-center mt-2 space-x-3">
                                                <RadioGroupItem
                                                    value="4-6"
                                                    id="r2"
                                                    onClick={() => setProjectnumber("4-6")}
                                                />
                                                <Label htmlFor="r2">4-6</Label>
                                            </div>
                                            <div className="flex items-center mt-2 space-x-3">
                                                <RadioGroupItem
                                                    value="7-9"
                                                    id="r3"
                                                    onClick={() => setProjectnumber("7-9")}
                                                />
                                                <Label htmlFor="r3">7-9</Label>
                                            </div>
                                            <div className="flex items-center mt-2 space-x-3">
                                                <RadioGroupItem
                                                    value="10"
                                                    id="r4"
                                                    onClick={() => setProject(true)}
                                                />
                                                <Label htmlFor="r4">&ge;10</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                )}
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-4 p-0">
                        <Button onClick={() => { setPage(2) }}>Back</Button>
                        <Button className="bg-[#0114D6]" onClick={() => { setPage(4) }}>Next</Button>
                    </CardFooter>
                </Card>
            ) : page === 4 ? (
                <Card className="p-5 w-80">
                    <CardTitle>
                        Where do you come from? 🤓
                    </CardTitle>
                    <CardDescription className="mt-2">
                        It is about your educational background
                    </CardDescription>
                    <CardContent className="p-0 mt-5">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="university">Which university do you go to?</Label>
                                    <Input
                                        id="university"
                                        placeholder="Nagoya University"
                                        name="university"
                                        type="text"
                                        required={true}
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="major">What's your major?</Label>
                                    <Input
                                        id="major"
                                        placeholder="Computer Science"
                                        name="major"
                                        type="text"
                                        required={true}
                                        value={major}
                                        onChange={(e) => setMajor(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="semester">What semester are you in?</Label>
                                    <Input
                                        id="semester"
                                        placeholder="1"
                                        name="semester"
                                        type="text"
                                        required={true}
                                        value={semester}
                                        onChange={(e) => setSemester(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="coursework">What have you learnt so far?</Label>
                                    {COURSEWORK.map((role, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 mt-2">
                                            <Checkbox id={role.id} />
                                            <label
                                                htmlFor={role.id}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {role.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-4 p-0">
                        <Button onClick={() => { setPage(3) }}>Back</Button>
                        <Button className="bg-[#0114D6]" onClick={() => { setPage(5) }}>Next</Button>
                    </CardFooter>
                </Card >
            ) : page === 5 ? (
                <Card className="p-5 w-80">
                    <CardTitle>
                        We are almost there! 😆
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Show us what you got!
                    </CardDescription>
                    <CardContent className="p-0 mt-5">
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="project">How long can you spend your time each week?</Label>
                                    <RadioGroup defaultValue={availability}>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value="1-3"
                                                id="r1"
                                                onClick={() => setAvailability("1-3")}
                                            />
                                            <Label htmlFor="r1">1-3 hours</Label>
                                        </div>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value="4-6"
                                                id="r2"
                                                onClick={() => setAvailability("4-6")}
                                            />
                                            <Label htmlFor="r2">4-6 hours</Label>
                                        </div>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value="7-9"
                                                id="r3"
                                                onClick={() => setAvailability("7-9")}
                                            />
                                            <Label htmlFor="r3">7-9 hours</Label>
                                        </div>
                                        <div className="flex items-center mt-2 space-x-3">
                                            <RadioGroupItem
                                                value=">=10"
                                                id="r4"
                                                onClick={() => setAvailability(">=10")}
                                            />
                                            <Label htmlFor="r4">&ge;10 hours</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="coursework">What's your speciality?</Label>
                                    {ROLE.map((role, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 mt-2">
                                            <Checkbox
                                                id={role.id}
                                            />
                                            <label
                                                htmlFor={role.id}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {role.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-4 p-0">
                        <Button onClick={() => { setPage(4) }}>Back</Button>
                        <Button className="bg-[#0114D6]" onClick={() => { setPage(6) }}>Next</Button>
                    </CardFooter>
                </Card>
            ) : (<div />)}
        </div >
    )
}

export default Registration