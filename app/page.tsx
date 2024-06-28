"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { BAHASA } from '@/lib/utils/constants';
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <main className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <section className="flex flex-col justify-center items-center gap-16">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-3xl px-4 md:text-5xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-relaxed xl:leading-snug text-center mx-auto "
                >
                    Informasi dan Pelayanan Publik Terpercaya {" "}
                    <Highlight className="text-black font-bold dark:text-white">
                        Trisurya.
                    </Highlight>
                </motion.h1>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {value
                                ? BAHASA.find((b) => b.value === value)?.label
                                : "Pilih Bahasa..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Cari Bahasa..." />
                            <CommandList>
                                <CommandEmpty>Bahasa tidak ditemukan.</CommandEmpty>
                                <CommandGroup>
                                    {BAHASA.map((b) => (
                                        <CommandItem
                                            key={b.value}
                                            value={b.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === b.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {b.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <Button
                    onClick={() => router.push('/chat?bahasa=' + value)}
                    className="-mt-10 font-bold bg-gradient-to-r from-indigo-300 to-purple-300 dark:text-white dark:from-indigo-600 dark:to-purple-600 disabled:dark:text-slate-200 disabled:dark:from-indigo-400 disabled:dark:to-purple-400 disabled:opacity-100 transition-colors delay-150"
                    disabled={ !value }
                >
                    Mulai Percakapan
                </Button>
            </section>
        </main>
    );
}