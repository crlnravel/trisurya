"use client"

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import {Highlight} from "@/components/ui/hero-highlight";
import {motion} from "framer-motion";
import * as React from "react";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Pesan, TemplatePertanyaan} from "@/app/chat/interfaces";
import {templatePertanyaanIndonesia} from "@/app/chat/constants";
import {GoLaw} from "react-icons/go";
import {RiServiceFill} from "react-icons/ri";
import {FaDatabase} from "react-icons/fa6";
import {SendIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Input} from "@/components/ui/input";

export default function Chat() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const bahasa = searchParams.get('bahasa') ?? 'indonesia';
    const [curQuery, setCurQuery] = useState<string>('');
    const [template, setTemplate] = useState<TemplatePertanyaan[]>([]);
    const [conversation, setConversation] = useState<Pesan[]>([])
    const [loadingQuery, setLoadingQuery] = useState<boolean>(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        switch (bahasa) {
            case "indonesia":
                setTemplate(templatePertanyaanIndonesia);
                break;
            case "jawa":
                setTemplate(templatePertanyaanIndonesia);
                break;
            case "bali":
                setTemplate(templatePertanyaanIndonesia);
                break;
            case "sunda":
                setTemplate(templatePertanyaanIndonesia);
                break;
            default:
                router.push('/')
                break;
        }

        setLoading(false);
    }, [bahasa, router])

    const handleKirimPesan = async (query: string) => {
        setLoadingQuery(true)

        setTemplate([])
        setConversation((prev) => [...prev, {
            'isi': query,
            'sender': 'user'
        }])

        const backendUri = process.env.NEXT_PUBLIC_BACKEND_API ?? '';

        const res = await fetch(backendUri, {
            method: 'POST',
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "bahasa": bahasa,
                "query": query
            })
        });
        const json = await res.json();

        setConversation((prev) => [...prev, {
            'isi': json.res,
            'sender': 'bot'
        }])

        loadingQuery;
    }

    return loading ? (
        <></>
    ) : (
        <main
            className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col pb-24">
            <section className="flex flex-col pt-4 px-6 md:pt-7 md:px-10 lg:pt-12 lg:px-16 gap-1">
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-3xl px-4 md:text-4xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-relaxed xl:leading-snug"
                >
                    Selamat pagi, {" "}
                    <Highlight className="text-black dark:text-white">
                        Trisurya.
                    </Highlight>
                </motion.h2>
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-3xl px-4 md:text-4xl font-normal text-neutral-600 dark:text-slate-400 max-w-4xl leading-relaxed xl:leading-snug"
                >
                    Apa yang saya bisa bantu hari ini?
                </motion.h2>
            </section>
            <ScrollArea className="max-w-[100vw] w-full pt-4 px-6 md:pt-7 md:px-10 lg:pt-12 lg:px-16">
                <div className="flex space-x-4">
                    {template.map((p, index) => (
                        <Card
                            key={index}
                            onClick={() => {
                                setCurQuery(p.pertanyaan);
                                setTemplate([]);
                            }}
                            className="flex flex-col max-w-screen w-72 hover:bg-slate-800 hover:cursor-pointer transition-colors"
                        >
                            <CardHeader>
                                <CardTitle className='h-8'>
                                    {p.topik === 'hukum' ? <GoLaw/> : (
                                        p.topik === 'pelayananPublik' ? <RiServiceFill/> :
                                            <FaDatabase/>
                                    )}
                                </CardTitle>
                                <CardDescription className='text-white'>
                                    {p.pertanyaan}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>
            <div className="flex flex-col gap-4  px-6 md:px-10 lg:px-16">
                {conversation.map((chat, index) => (
                    <div
                        key={index}
                        className={"flex items-start gap-3"}
                    >
                        <Avatar className="w-8 h-8 border">
                            <AvatarImage src="/placeholder-user.jpg"/>
                            <AvatarFallback>{chat.sender === "bot" ? "CB" : "YU"}</AvatarFallback>
                        </Avatar>
                        <div className={chat.sender === "bot" ?
                            "bg-muted rounded-lg p-3 max-w-[75%]" : "bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground"}>
                            <p>{chat.isi}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='fixed bottom-8 px-6 md:px-10 lg:px-16 w-full'>
                <Input
                    placeholder="Tanyakan apa saja..."
                    className="rounded-2xl"
                    value={curQuery}
                    onChange={e => setCurQuery(e.target.value)}
                    onKeyUp={async e => {
                        if (e.key === "Enter") {
                            await handleKirimPesan(curQuery)
                            setCurQuery('')
                        }
                    }}
                />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={async () => {
                        await handleKirimPesan(curQuery)
                        setCurQuery('')
                    }}
                    className="absolute right-[70px] bottom-[1px] hover:bg-transparent hover:text-white">
                    <SendIcon size={15} />
                </Button>
            </div>
        </main>
    );
}