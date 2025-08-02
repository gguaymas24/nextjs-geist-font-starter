"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("transcription")
  const [currentExercise, setCurrentExercise] = useState<any>(null)
  const [userInput, setUserInput] = useState("")
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [selectedSubcategory, setSelectedSubcategory] = useState("")

  // Comprehensive word database A-Z
  const wordDatabase = {
    A: [
      { word: "abandon", transcription: "/əˈbæn.dən/", stress: "second" },
      { word: "ability", transcription: "/əˈbɪl.ə.ti/", stress: "second" },
      { word: "absolute", transcription: "/ˈæb.sə.luːt/", stress: "first" },
      { word: "academic", transcription: "/ˌæk.əˈdem.ɪk/", stress: "third" },
      { word: "accelerate", transcription: "/əkˈsel.ə.reɪt/", stress: "second" },
      { word: "acceptable", transcription: "/əkˈsep.tə.bəl/", stress: "second" },
      { word: "accessible", transcription: "/əkˈses.ə.bəl/", stress: "second" },
      { word: "accompany", transcription: "/əˈkʌm.pə.ni/", stress: "second" },
      { word: "accomplish", transcription: "/əˈkʌm.plɪʃ/", stress: "second" },
      { word: "accordance", transcription: "/əˈkɔː.dəns/", stress: "second" },
      { word: "acknowledge", transcription: "/əkˈnɒl.ɪdʒ/", stress: "second" },
      { word: "acquisition", transcription: "/ˌæk.wɪˈzɪʃ.ən/", stress: "third" },
      { word: "administration", transcription: "/ədˌmɪn.ɪˈstreɪ.ʃən/", stress: "fourth" },
      { word: "advertisement", transcription: "/ədˈvɜː.tɪs.mənt/", stress: "second" },
      { word: "agriculture", transcription: "/ˈæɡ.rɪˌkʌl.tʃər/", stress: "first" },
      { word: "alternative", transcription: "/ɔːlˈtɜː.nə.tɪv/", stress: "second" },
      { word: "anniversary", transcription: "/ˌæn.ɪˈvɜː.sər.i/", stress: "third" },
      { word: "application", transcription: "/ˌæp.lɪˈkeɪ.ʃən/", stress: "third" },
      { word: "appreciation", transcription: "/əˌpriː.ʃiˈeɪ.ʃən/", stress: "fourth" },
      { word: "architecture", transcription: "/ˈɑː.kɪ.tek.tʃər/", stress: "first" },
      { word: "arrangement", transcription: "/əˈreɪndʒ.mənt/", stress: "second" },
      { word: "association", transcription: "/əˌsəʊ.siˈeɪ.ʃən/", stress: "fourth" },
      { word: "atmosphere", transcription: "/ˈæt.mə.sfɪər/", stress: "first" },
      { word: "automatically", transcription: "/ˌɔː.təˈmæt.ɪ.kəl.i/", stress: "third" },
      { word: "availability", transcription: "/əˌveɪ.ləˈbɪl.ə.ti/", stress: "fourth" },
      { word: "apple", transcription: "/ˈæp.əl/", stress: "first" },
      { word: "animal", transcription: "/ˈæn.ɪ.məl/", stress: "first" },
      { word: "answer", transcription: "/ˈɑːn.sər/", stress: "first" },
      { word: "article", transcription: "/ˈɑː.tɪ.kəl/", stress: "first" },
      { word: "attention", transcription: "/əˈten.ʃən/", stress: "second" },
      { word: "analysis", transcription: "/əˈnæl.ə.sɪs/", stress: "second" },
      { word: "approach", transcription: "/əˈprəʊtʃ/", stress: "second" },
      { word: "appropriate", transcription: "/əˈprəʊ.pri.ət/", stress: "second" },
      { word: "argument", transcription: "/ˈɑː.ɡjə.mənt/", stress: "first" },
      { word: "artificial", transcription: "/ˌɑː.tɪˈfɪʃ.əl/", stress: "third" },
      { word: "assistant", transcription: "/əˈsɪs.tənt/", stress: "second" },
      { word: "authority", transcription: "/ɔːˈθɒr.ə.ti/", stress: "second" },
      { word: "available", transcription: "/əˈveɪ.lə.bəl/", stress: "second" },
      { word: "adventure", transcription: "/ədˈven.tʃər/", stress: "second" },
      { word: "advantage", transcription: "/ədˈvɑːn.tɪdʒ/", stress: "second" },
      { word: "airplane", transcription: "/ˈeər.pleɪn/", stress: "first" },
      { word: "airport", transcription: "/ˈeər.pɔːt/", stress: "first" },
      { word: "alphabet", transcription: "/ˈæl.fə.bet/", stress: "first" },
      { word: "amazing", transcription: "/əˈmeɪ.zɪŋ/", stress: "second" },
      { word: "ambulance", transcription: "/ˈæm.bjə.ləns/", stress: "first" },
      { word: "apartment", transcription: "/əˈpɑːt.mənt/", stress: "second" },
      { word: "appearance", transcription: "/əˈpɪər.əns/", stress: "second" },
      { word: "appointment", transcription: "/əˈpɔɪnt.mənt/", stress: "second" },
      { word: "architect", transcription: "/ˈɑː.kɪ.tekt/", stress: "first" },
      { word: "astronaut", transcription: "/ˈæs.trə.nɔːt/", stress: "first" },
      { word: "athletic", transcription: "/æθˈlet.ɪk/", stress: "second" },
      { word: "audience", transcription: "/ˈɔː.di.əns/", stress: "first" }
    ],
    B: [
      { word: "beautiful", transcription: "/ˈbjuː.tɪ.fəl/", stress: "first" },
      { word: "beginning", transcription: "/bɪˈɡɪn.ɪŋ/", stress: "second" },
      { word: "beneficial", transcription: "/ˌben.ɪˈfɪʃ.əl/", stress: "third" },
      { word: "biological", transcription: "/ˌbaɪ.əˈlɒdʒ.ɪ.kəl/", stress: "third" },
      { word: "breakthrough", transcription: "/ˈbreɪk.θruː/", stress: "first" },
      { word: "basketball", transcription: "/ˈbɑː.skɪt.bɔːl/", stress: "first" },
      { word: "background", transcription: "/ˈbæk.ɡraʊnd/", stress: "first" },
      { word: "butterfly", transcription: "/ˈbʌt.ə.flaɪ/", stress: "first" },
      { word: "business", transcription: "/ˈbɪz.nəs/", stress: "first" },
      { word: "brother", transcription: "/ˈbrʌð.ər/", stress: "first" },
      { word: "building", transcription: "/ˈbɪl.dɪŋ/", stress: "first" },
      { word: "birthday", transcription: "/ˈbɜːθ.deɪ/", stress: "first" },
      { word: "breakfast", transcription: "/ˈbrek.fəst/", stress: "first" },
      { word: "bedroom", transcription: "/ˈbed.ruːm/", stress: "first" },
      { word: "bicycle", transcription: "/ˈbaɪ.sɪ.kəl/", stress: "first" },
      { word: "bottle", transcription: "/ˈbɒt.əl/", stress: "first" },
      { word: "button", transcription: "/ˈbʌt.ən/", stress: "first" },
      { word: "balance", transcription: "/ˈbæl.əns/", stress: "first" },
      { word: "battery", transcription: "/ˈbæt.ər.i/", stress: "first" },
      { word: "behavior", transcription: "/bɪˈheɪv.jər/", stress: "second" },
      { word: "believe", transcription: "/bɪˈliːv/", stress: "second" },
      { word: "between", transcription: "/bɪˈtwiːn/", stress: "second" },
      { word: "beyond", transcription: "/bɪˈjɒnd/", stress: "second" },
      { word: "billion", transcription: "/ˈbɪl.jən/", stress: "first" },
      { word: "biology", transcription: "/baɪˈɒl.ə.dʒi/", stress: "second" },
      { word: "blanket", transcription: "/ˈblæŋ.kɪt/", stress: "first" },
      { word: "boundary", transcription: "/ˈbaʊn.dər.i/", stress: "first" },
      { word: "brilliant", transcription: "/ˈbrɪl.jənt/", stress: "first" },
      { word: "broadcast", transcription: "/ˈbrɔːd.kɑːst/", stress: "first" },
      { word: "budget", transcription: "/ˈbʌdʒ.ɪt/", stress: "first" },
      { word: "banana", transcription: "/bəˈnɑː.nə/", stress: "second" },
      { word: "benefit", transcription: "/ˈben.ɪ.fɪt/", stress: "first" },
      { word: "blackboard", transcription: "/ˈblæk.bɔːd/", stress: "first" },
      { word: "bookstore", transcription: "/ˈbʊk.stɔːr/", stress: "first" },
      { word: "businessman", transcription: "/ˈbɪz.nəs.mæn/", stress: "first" },
      { word: "bathroom", transcription: "/ˈbɑːθ.ruːm/", stress: "first" },
      { word: "backyard", transcription: "/ˈbæk.jɑːrd/", stress: "first" },
      { word: "baseball", transcription: "/ˈbeɪs.bɔːl/", stress: "first" },
      { word: "because", transcription: "/bɪˈkɔːz/", stress: "second" },
      { word: "bedroom", transcription: "/ˈbed.ruːm/", stress: "first" },
      { word: "bicycle", transcription: "/ˈbaɪ.sɪ.kəl/", stress: "first" },
      { word: "biology", transcription: "/baɪˈɒl.ə.dʒi/", stress: "second" },
      { word: "birthday", transcription: "/ˈbɜːθ.deɪ/", stress: "first" },
      { word: "bookshelf", transcription: "/ˈbʊk.ʃelf/", stress: "first" },
      { word: "breakfast", transcription: "/ˈbrek.fəst/", stress: "first" },
      { word: "butterfly", transcription: "/ˈbʌt.ər.flaɪ/", stress: "first" }
    ],
    C: [
      { word: "computer", transcription: "/kəmˈpjuː.tər/", stress: "second" },
      { word: "celebration", transcription: "/ˌsel.əˈbreɪ.ʃən/", stress: "third" },
      { word: "certificate", transcription: "/səˈtɪf.ɪ.kət/", stress: "second" },
      { word: "characteristic", transcription: "/ˌkær.ək.təˈrɪs.tɪk/", stress: "fourth" },
      { word: "civilization", transcription: "/ˌsɪv.əl.aɪˈzeɪ.ʃən/", stress: "fourth" },
      { word: "classification", transcription: "/ˌklæs.ɪ.fɪˈkeɪ.ʃən/", stress: "fourth" },
      { word: "collaboration", transcription: "/kəˌlæb.əˈreɪ.ʃən/", stress: "fourth" },
      { word: "combination", transcription: "/ˌkɒm.bɪˈneɪ.ʃən/", stress: "fourth" },
      { word: "comfortable", transcription: "/ˈkʌmf.tə.bəl/", stress: "first" },
      { word: "commercial", transcription: "/kəˈmɜː.ʃəl/", stress: "second" },
      { word: "communication", transcription: "/kəˌmjuː.nɪˈkeɪ.ʃən/", stress: "fourth" },
      { word: "competition", transcription: "/ˌkɒm.pəˈtɪʃ.ən/", stress: "third" },
      { word: "complicated", transcription: "/ˈkɒm.plɪ.keɪ.tɪd/", stress: "first" },
      { word: "concentration", transcription: "/ˌkɒn.sənˈtreɪ.ʃən/", stress: "third" },
      { word: "conclusion", transcription: "/kənˈkluː.ʒən/", stress: "second" },
      { word: "conference", transcription: "/ˈkɒn.fər.əns/", stress: "first" },
      { word: "confidence", transcription: "/ˈkɒn.fɪ.dəns/", stress: "first" },
      { word: "connection", transcription: "/kəˈnek.ʃən/", stress: "second" },
      { word: "consequence", transcription: "/ˈkɒn.sɪ.kwəns/", stress: "first" },
      { word: "consideration", transcription: "/kənˌsɪd.əˈreɪ.ʃən/", stress: "fourth" },
      { word: "construction", transcription: "/kənˈstrʌk.ʃən/", stress: "second" },
      { word: "contemporary", transcription: "/kənˈtem.pər.ər.i/", stress: "second" },
      { word: "contribution", transcription: "/ˌkɒn.trɪˈbjuː.ʃən/", stress: "third" },
      { word: "conversation", transcription: "/ˌkɒn.vəˈseɪ.ʃən/", stress: "third" },
      { word: "cooperation", transcription: "/kəʊˌɒp.əˈreɪ.ʃən/", stress: "fourth" },
      { word: "corporation", transcription: "/ˌkɔː.pəˈreɪ.ʃən/", stress: "third" },
      { word: "countryside", transcription: "/ˈkʌn.tri.saɪd/", stress: "first" },
      { word: "creativity", transcription: "/ˌkriː.eɪˈtɪv.ə.ti/", stress: "third" },
      { word: "curriculum", transcription: "/kəˈrɪk.jə.ləm/", stress: "second" },
      { word: "customer", transcription: "/ˈkʌs.tə.mər/", stress: "first" },
      { word: "calendar", transcription: "/ˈkæl.ən.dər/", stress: "first" },
      { word: "camera", transcription: "/ˈkæm.ər.ə/", stress: "first" },
      { word: "candidate", transcription: "/ˈkæn.dɪ.dət/", stress: "first" },
      { word: "capacity", transcription: "/kəˈpæs.ə.ti/", stress: "second" },
      { word: "capital", transcription: "/ˈkæp.ɪ.təl/", stress: "first" },
      { word: "category", transcription: "/ˈkæt.ə.ɡər.i/", stress: "first" },
      { word: "ceremony", transcription: "/ˈser.ə.mən.i/", stress: "first" },
      { word: "challenge", transcription: "/ˈtʃæl.ɪndʒ/", stress: "first" },
      { word: "character", transcription: "/ˈkær.ək.tər/", stress: "first" },
      { word: "chemistry", transcription: "/ˈkem.ɪ.stri/", stress: "first" },
      { word: "chocolate", transcription: "/ˈtʃɒk.lət/", stress: "first" },
      { word: "Christmas", transcription: "/ˈkrɪs.məs/", stress: "first" },
      { word: "cigarette", transcription: "/ˌsɪɡ.əˈret/", stress: "third" },
      { word: "classroom", transcription: "/ˈklɑːs.ruːm/", stress: "first" },
      { word: "colleague", transcription: "/ˈkɒl.iːɡ/", stress: "first" },
      { word: "community", transcription: "/kəˈmjuː.nə.ti/", stress: "second" }
    ],
    D: [
      { word: "development", transcription: "/dɪˈvel.əp.mənt/", stress: "second" },
      { word: "democracy", transcription: "/dɪˈmɒk.rə.si/", stress: "second" },
      { word: "demonstration", transcription: "/ˌdem.ənˈstreɪ.ʃən/", stress: "third" },
      { word: "department", transcription: "/dɪˈpɑːt.mənt/", stress: "second" },
      { word: "description", transcription: "/dɪˈskrɪp.ʃən/", stress: "second" },
      { word: "destination", transcription: "/ˌdes.tɪˈneɪ.ʃən/", stress: "third" },
      { word: "determination", transcription: "/dɪˌtɜː.mɪˈneɪ.ʃən/", stress: "fourth" },
      { word: "dictionary", transcription: "/ˈdɪk.ʃən.ər.i/", stress: "first" },
      { word: "difference", transcription: "/ˈdɪf.ər.əns/", stress: "first" },
      { word: "difficulty", transcription: "/ˈdɪf.ɪ.kəl.ti/", stress: "first" },
      { word: "dimension", transcription: "/daɪˈmen.ʃən/", stress: "second" },
      { word: "direction", transcription: "/daɪˈrek.ʃən/", stress: "second" },
      { word: "discipline", transcription: "/ˈdɪs.ə.plɪn/", stress: "first" },
      { word: "discussion", transcription: "/dɪˈskʌʃ.ən/", stress: "second" },
      { word: "distribution", transcription: "/ˌdɪs.trɪˈbjuː.ʃən/", stress: "third" },
      { word: "document", transcription: "/ˈdɒk.jə.mənt/", stress: "first" },
      { word: "domestic", transcription: "/dəˈmes.tɪk/", stress: "second" },
      { word: "dramatic", transcription: "/drəˈmæt.ɪk/", stress: "second" },
      { word: "duration", transcription: "/djʊˈreɪ.ʃən/", stress: "second" },
      { word: "dynamic", transcription: "/daɪˈnæm.ɪk/", stress: "second" },
      { word: "dangerous", transcription: "/ˈdeɪn.dʒər.əs/", stress: "first" },
      { word: "daughter", transcription: "/ˈdɔː.tər/", stress: "first" },
      { word: "decision", transcription: "/dɪˈsɪʒ.ən/", stress: "second" },
      { word: "delivery", transcription: "/dɪˈlɪv.ər.i/", stress: "second" },
      { word: "designer", transcription: "/dɪˈzaɪ.nər/", stress: "second" },
      { word: "detective", transcription: "/dɪˈtek.tɪv/", stress: "second" },
      { word: "dialogue", transcription: "/ˈdaɪ.ə.lɒɡ/", stress: "first" },
      { word: "diamond", transcription: "/ˈdaɪ.ə.mənd/", stress: "first" },
      { word: "digital", transcription: "/ˈdɪdʒ.ɪ.təl/", stress: "first" },
      { word: "dinosaur", transcription: "/ˈdaɪ.nə.sɔːr/", stress: "first" },
      { word: "director", transcription: "/daɪˈrek.tər/", stress: "second" },
      { word: "discover", transcription: "/dɪˈskʌv.ər/", stress: "second" },
      { word: "distance", transcription: "/ˈdɪs.təns/", stress: "first" },
      { word: "division", transcription: "/dɪˈvɪʒ.ən/", stress: "second" },
      { word: "doctor", transcription: "/ˈdɒk.tər/", stress: "first" },
      { word: "dolphin", transcription: "/ˈdɒl.fɪn/", stress: "first" },
      { word: "downtown", transcription: "/ˌdaʊnˈtaʊn/", stress: "second" },
      { word: "drawing", transcription: "/ˈdrɔː.ɪŋ/", stress: "first" },
      { word: "driver", transcription: "/ˈdraɪ.vər/", stress: "first" },
      { word: "during", transcription: "/ˈdjʊər.ɪŋ/", stress: "first" }
    ],
    E: [
      { word: "education", transcription: "/ˌedʒ.ʊˈkeɪ.ʃən/", stress: "third" },
      { word: "electronic", transcription: "/ɪˌlek.ˈtrɒn.ɪk/", stress: "third" },
      { word: "emergency", transcription: "/ɪˈmɜː.dʒən.si/", stress: "second" },
      { word: "employment", transcription: "/ɪmˈplɔɪ.mənt/", stress: "second" },
      { word: "engineering", transcription: "/ˌen.dʒɪˈnɪər.ɪŋ/", stress: "third" },
      { word: "entertainment", transcription: "/ˌen.təˈteɪn.mənt/", stress: "third" },
      { word: "environment", transcription: "/ɪnˈvaɪ.rən.mənt/", stress: "second" },
      { word: "equipment", transcription: "/ɪˈkwɪp.mənt/", stress: "second" },
      { word: "establishment", transcription: "/ɪˈstæb.lɪʃ.mənt/", stress: "second" },
      { word: "evaluation", transcription: "/ɪˌvæl.juˈeɪ.ʃən/", stress: "fourth" },
      { word: "examination", transcription: "/ɪɡˌzæm.ɪˈneɪ.ʃən/", stress: "fourth" },
      { word: "excellent", transcription: "/ˈek.səl.ənt/", stress: "first" },
      { word: "exception", transcription: "/ɪkˈsep.ʃən/", stress: "second" },
      { word: "excitement", transcription: "/ɪkˈsaɪt.mənt/", stress: "second" },
      { word: "exercise", transcription: "/ˈek.sə.saɪz/", stress: "first" },
      { word: "exhibition", transcription: "/ˌek.sɪˈbɪʃ.ən/", stress: "third" },
      { word: "experience", transcription: "/ɪkˈspɪər.i.əns/", stress: "second" },
      { word: "experiment", transcription: "/ɪkˈsper.ɪ.mənt/", stress: "second" },
      { word: "explanation", transcription: "/ˌek.spləˈneɪ.ʃən/", stress: "third" },
      { word: "expression", transcription: "/ɪkˈspreʃ.ən/", stress: "second" },
      { word: "elephant", transcription: "/ˈel.ɪ.fənt/", stress: "first" },
      { word: "elevator", transcription: "/ˈel.ɪ.veɪ.tər/", stress: "first" },
      { word: "employee", transcription: "/ɪmˈplɔɪ.iː/", stress: "third" },
      { word: "engineer", transcription: "/ˌen.dʒɪˈnɪər/", stress: "third" },
      { word: "envelope", transcription: "/ˈen.və.ləʊp/", stress: "first" },
      { word: "episode", transcription: "/ˈep.ɪ.səʊd/", stress: "first" },
      { word: "equation", transcription: "/ɪˈkweɪ.ʒən/", stress: "second" },
      { word: "estimate", transcription: "/ˈes.tɪ.mət/", stress: "first" },
      { word: "evening", transcription: "/ˈiːv.nɪŋ/", stress: "first" },
      { word: "evidence", transcription: "/ˈev.ɪ.dəns/", stress: "first" },
      { word: "exactly", transcription: "/ɪɡˈzækt.li/", stress: "second" },
      { word: "example", transcription: "/ɪɡˈzɑːm.pəl/", stress: "second" },
      { word: "exchange", transcription: "/ɪksˈtʃeɪndʒ/", stress: "second" },
      { word: "exciting", transcription: "/ɪkˈsaɪ.tɪŋ/", stress: "second" },
      { word: "executive", transcription: "/ɪɡˈzek.jə.tɪv/", stress: "second" },
      { word: "expensive", transcription: "/ɪkˈspen.sɪv/", stress: "second" },
      { word: "expert", transcription: "/ˈek.spɜːt/", stress: "first" },
      { word: "explore", transcription: "/ɪkˈsplɔːr/", stress: "second" },
      { word: "extreme", transcription: "/ɪkˈstriːm/", stress: "second" },
      { word: "eyebrow", transcription: "/ˈaɪ.braʊ/", stress: "first" }
    ],
    F: [
      { word: "fantastic", transcription: "/fænˈtæs.tɪk/", stress: "second" },
      { word: "fascination", transcription: "/ˌfæs.ɪˈneɪ.ʃən/", stress: "third" },
      { word: "favorite", transcription: "/ˈfeɪ.vər.ɪt/", stress: "first" },
      { word: "February", transcription: "/ˈfeb.ru.ər.i/", stress: "first" },
      { word: "festival", transcription: "/ˈfes.tɪ.vəl/", stress: "first" },
      { word: "financial", transcription: "/faɪˈnæn.ʃəl/", stress: "second" },
      { word: "flexibility", transcription: "/ˌflek.səˈbɪl.ə.ti/", stress: "third" },
      { word: "foundation", transcription: "/faʊnˈdeɪ.ʃən/", stress: "second" },
      { word: "frequency", transcription: "/ˈfriː.kwən.si/", stress: "first" },
      { word: "friendship", transcription: "/ˈfrend.ʃɪp/", stress: "first" },
      { word: "function", transcription: "/ˈfʌŋk.ʃən/", stress: "first" },
      { word: "fundamental", transcription: "/ˌfʌn.dəˈmen.təl/", stress: "third" },
      { word: "furniture", transcription: "/ˈfɜː.nɪ.tʃər/", stress: "first" },
      { word: "future", transcription: "/ˈfjuː.tʃər/", stress: "first" },
      { word: "factory", transcription: "/ˈfæk.tər.i/", stress: "first" },
      { word: "family", transcription: "/ˈfæm.ə.li/", stress: "first" },
      { word: "famous", transcription: "/ˈfeɪ.məs/", stress: "first" },
      { word: "fashion", transcription: "/ˈfæʃ.ən/", stress: "first" },
      { word: "feature", transcription: "/ˈfiː.tʃər/", stress: "first" },
      { word: "feeling", transcription: "/ˈfiː.lɪŋ/", stress: "first" },
      { word: "fiction", transcription: "/ˈfɪk.ʃən/", stress: "first" },
      { word: "fifteen", transcription: "/ˌfɪfˈtiːn/", stress: "second" },
      { word: "finger", transcription: "/ˈfɪŋ.ɡər/", stress: "first" },
      { word: "football", transcription: "/ˈfʊt.bɔːl/", stress: "first" },
      { word: "foreign", transcription: "/ˈfɒr.ən/", stress: "first" },
      { word: "forest", transcription: "/ˈfɒr.ɪst/", stress: "first" },
      { word: "forever", transcription: "/fərˈev.ər/", stress: "second" },
      { word: "freedom", transcription: "/ˈfriː.dəm/", stress: "first" },
      { word: "frozen", transcription: "/ˈfrəʊ.zən/", stress: "first" },
      { word: "function", transcription: "/ˈfʌŋk.ʃən/", stress: "first" }
    ],
    G: [
      { word: "generation", transcription: "/ˌdʒen.əˈreɪ.ʃən/", stress: "third" },
      { word: "geography", transcription: "/dʒiˈɒɡ.rə.fi/", stress: "second" },
      { word: "government", transcription: "/ˈɡʌv.ən.mənt/", stress: "first" },
      { word: "graduation", transcription: "/ˌɡrædʒ.uˈeɪ.ʃən/", stress: "third" },
      { word: "guarantee", transcription: "/ˌɡær.ənˈtiː/", stress: "third" },
      { word: "guidance", transcription: "/ˈɡaɪ.dəns/", stress: "first" },
      { word: "guitar", transcription: "/ɡɪˈtɑː/", stress: "second" },
      { word: "gallery", transcription: "/ˈɡæl.ər.i/", stress: "first" },
      { word: "garden", transcription: "/ˈɡɑː.dən/", stress: "first" },
      { word: "general", transcription: "/ˈdʒen.ər.əl/", stress: "first" },
      { word: "gentle", transcription: "/ˈdʒen.təl/", stress: "first" },
      { word: "gesture", transcription: "/ˈdʒes.tʃər/", stress: "first" },
      { word: "global", transcription: "/ˈɡləʊ.bəl/", stress: "first" },
      { word: "golden", transcription: "/ˈɡəʊl.dən/", stress: "first" },
      { word: "grammar", transcription: "/ˈɡræm.ər/", stress: "first" },
      { word: "graphic", transcription: "/ˈɡræf.ɪk/", stress: "first" },
      { word: "grocery", transcription: "/ˈɡrəʊ.sər.i/", stress: "first" },
      { word: "ground", transcription: "/ɡraʊnd/", stress: "first" },
      { word: "growth", transcription: "/ɡrəʊθ/", stress: "first" },
      { word: "guest", transcription: "/ɡest/", stress: "first" }
    ],
    H: [
      { word: "happiness", transcription: "/ˈhæp.ɪ.nəs/", stress: "first" },
      { word: "hardware", transcription: "/ˈhɑːd.weər/", stress: "first" },
      { word: "headline", transcription: "/ˈhed.laɪn/", stress: "first" },
      { word: "healthy", transcription: "/ˈhel.θi/", stress: "first" },
      { word: "heritage", transcription: "/ˈher.ɪ.tɪdʒ/", stress: "first" },
      { word: "highlight", transcription: "/ˈhaɪ.laɪt/", stress: "first" },
      { word: "history", transcription: "/ˈhɪs.tər.i/", stress: "first" },
      { word: "holiday", transcription: "/ˈhɒl.ə.deɪ/", stress: "first" },
      { word: "hospital", transcription: "/ˈhɒs.pɪ.təl/", stress: "first" },
      { word: "household", transcription: "/ˈhaʊs.həʊld/", stress: "first" },
      { word: "humanity", transcription: "/hjuːˈmæn.ə.ti/", stress: "second" },
      { word: "hurricane", transcription: "/ˈhʌr.ɪ.kən/", stress: "first" },
      { word: "husband", transcription: "/ˈhʌz.bənd/", stress: "first" },
      { word: "hypothesis", transcription: "/haɪˈpɒθ.ə.sɪs/", stress: "second" },
      { word: "handle", transcription: "/ˈhæn.dəl/", stress: "first" },
      { word: "happen", transcription: "/ˈhæp.ən/", stress: "first" },
      { word: "harbor", transcription: "/ˈhɑː.bər/", stress: "first" },
      { word: "harvest", transcription: "/ˈhɑː.vɪst/", stress: "first" },
      { word: "heaven", transcription: "/ˈhev.ən/", stress: "first" },
      { word: "helmet", transcription: "/ˈhel.mət/", stress: "first" }
    ],
    I: [
      { word: "imagination", transcription: "/ɪˌmædʒ.ɪˈneɪ.ʃən/", stress: "fourth" },
      { word: "immediately", transcription: "/ɪˈmiː.di.ət.li/", stress: "second" },
      { word: "immigration", transcription: "/ˌɪm.ɪˈɡreɪ.ʃən/", stress: "third" },
      { word: "implementation", transcription: "/ˌɪm.plɪ.menˈteɪ.ʃən/", stress: "fourth" },
      { word: "importance", transcription: "/ɪmˈpɔː.təns/", stress: "second" },
      { word: "improvement", transcription: "/ɪmˈpruːv.mənt/", stress: "second" },
      { word: "independence", transcription: "/ˌɪn.dɪˈpen.dəns/", stress: "third" },
      { word: "individual", transcription: "/ˌɪn.dɪˈvɪdʒ.u.əl/", stress: "third" },
      { word: "industrial", transcription: "/ɪnˈdʌs.tri.əl/", stress: "second" },
      { word: "information", transcription: "/ˌɪn.fəˈmeɪ.ʃən/", stress: "third" },
      { word: "ingredient", transcription: "/ɪnˈɡriː.di.ənt/", stress: "second" },
      { word: "initiative", transcription: "/ɪˈnɪʃ.ə.tɪv/", stress: "second" },
      { word: "innovation", transcription: "/ˌɪn.əˈveɪ.ʃən/", stress: "third" },
      { word: "inspiration", transcription: "/ˌɪn.spəˈreɪ.ʃən/", stress: "third" },
      { word: "institution", transcription: "/ˌɪn.stɪˈtuː.ʃən/", stress: "third" },
      { word: "instruction", transcription: "/ɪnˈstrʌk.ʃən/", stress: "second" },
      { word: "integration", transcription: "/ˌɪn.tɪˈɡreɪ.ʃən/", stress: "third" },
      { word: "intelligence", transcription: "/ɪnˈtel.ɪ.dʒəns/", stress: "second" },
      { word: "interaction", transcription: "/ˌɪn.təˈræk.ʃən/", stress: "third" },
      { word: "international", transcription: "/ˌɪn.təˈnæʃ.ən.əl/", stress: "third" }
    ],
    J: [
      { word: "journalism", transcription: "/ˈdʒɜː.nə.lɪ.zəm/", stress: "first" },
      { word: "judgment", transcription: "/ˈdʒʌdʒ.mənt/", stress: "first" },
      { word: "justice", transcription: "/ˈdʒʌs.tɪs/", stress: "first" },
      { word: "jacket", transcription: "/ˈdʒæk.ɪt/", stress: "first" },
      { word: "January", transcription: "/ˈdʒæn.ju.ər.i/", stress: "first" },
      { word: "jealous", transcription: "/ˈdʒel.əs/", stress: "first" },
      { word: "jewelry", transcription: "/ˈdʒuː.əl.ri/", stress: "first" },
      { word: "journey", transcription: "/ˈdʒɜː.ni/", stress: "first" },
      { word: "jungle", transcription: "/ˈdʒʌŋ.ɡəl/", stress: "first" },
      { word: "junior", transcription: "/ˈdʒuː.ni.ər/", stress: "first" }
    ],
    K: [
      { word: "knowledge", transcription: "/ˈnɒl.ɪdʒ/", stress: "first" },
      { word: "keyboard", transcription: "/ˈkiː.bɔːd/", stress: "first" },
      { word: "kitchen", transcription: "/ˈkɪtʃ.ən/", stress: "first" },
      { word: "kingdom", transcription: "/ˈkɪŋ.dəm/", stress: "first" },
      { word: "kindness", transcription: "/ˈkaɪnd.nəs/", stress: "first" }
    ],
    L: [
      { word: "laboratory", transcription: "/ləˈbɒr.ə.tər.i/", stress: "second" },
      { word: "landscape", transcription: "/ˈlænd.skeɪp/", stress: "first" },
      { word: "language", transcription: "/ˈlæŋ.ɡwɪdʒ/", stress: "first" },
      { word: "leadership", transcription: "/ˈliː.də.ʃɪp/", stress: "first" },
      { word: "legislation", transcription: "/ˌledʒ.ɪˈsleɪ.ʃən/", stress: "third" },
      { word: "library", transcription: "/ˈlaɪ.brər.i/", stress: "first" },
      { word: "literature", transcription: "/ˈlɪt.ər.ə.tʃər/", stress: "first" },
      { word: "location", transcription: "/ləʊˈkeɪ.ʃən/", stress: "second" },
      { word: "luxury", transcription: "/ˈlʌk.ʃər.i/", stress: "first" }
    ],
    M: [
      { word: "management", transcription: "/ˈmæn.ɪdʒ.mənt/", stress: "first" },
      { word: "manufacturing", transcription: "/ˌmæn.jəˈfæk.tʃər.ɪŋ/", stress: "third" },
      { word: "marketing", transcription: "/ˈmɑː.kɪ.tɪŋ/", stress: "first" },
      { word: "mathematics", transcription: "/ˌmæθ.əˈmæt.ɪks/", stress: "third" },
      { word: "measurement", transcription: "/ˈmeʒ.ər.mənt/", stress: "first" },
      { word: "mechanism", transcription: "/ˈmek.ə.nɪ.zəm/", stress: "first" },
      { word: "medicine", transcription: "/ˈmed.ɪ.sən/", stress: "first" },
      { word: "membership", transcription: "/ˈmem.bə.ʃɪp/", stress: "first" },
      { word: "methodology", transcription: "/ˌmeθ.əˈdɒl.ə.dʒi/", stress: "third" },
      { word: "microscope", transcription: "/ˈmaɪ.krə.skəʊp/", stress: "first" }
    ],
    N: [
      { word: "nationality", transcription: "/ˌnæʃ.əˈnæl.ə.ti/", stress: "third" },
      { word: "navigation", transcription: "/ˌnæv.ɪˈɡeɪ.ʃən/", stress: "third" },
      { word: "necessary", transcription: "/ˈnes.ə.ser.i/", stress: "first" },
      { word: "negotiation", transcription: "/nɪˌɡəʊ.ʃiˈeɪ.ʃən/", stress: "fourth" },
      { word: "neighborhood", transcription: "/ˈneɪ.bə.hʊd/", stress: "first" },
      { word: "network", transcription: "/ˈnet.wɜːk/", stress: "first" },
      { word: "newspaper", transcription: "/ˈnjuːz.peɪ.pər/", stress: "first" },
      { word: "nutrition", transcription: "/njuːˈtrɪʃ.ən/", stress: "second" }
    ],
    O: [
      { word: "observation", transcription: "/ˌɒb.zəˈveɪ.ʃən/", stress: "third" },
      { word: "occupation", transcription: "/ˌɒk.jəˈpeɪ.ʃən/", stress: "third" },
      { word: "operation", transcription: "/ˌɒp.əˈreɪ.ʃən/", stress: "third" },
      { word: "opportunity", transcription: "/ˌɒp.əˈtuː.nə.ti/", stress: "third" },
      { word: "organization", transcription: "/ˌɔː.ɡən.aɪˈzeɪ.ʃən/", stress: "fourth" },
      { word: "original", transcription: "/əˈrɪdʒ.ən.əl/", stress: "second" },
      { word: "outstanding", transcription: "/aʊtˈstæn.dɪŋ/", stress: "second" }
    ],
    P: [
      { word: "participation", transcription: "/pɑːˌtɪs.ɪˈpeɪ.ʃən/", stress: "fourth" },
      { word: "performance", transcription: "/pəˈfɔː.məns/", stress: "second" },
      { word: "personality", transcription: "/ˌpɜː.sənˈæl.ə.ti/", stress: "third" },
      { word: "philosophy", transcription: "/fɪˈlɒs.ə.fi/", stress: "second" },
      { word: "photography", transcription: "/fəˈtɒɡ.rə.fi/", stress: "second" },
      { word: "population", transcription: "/ˌpɒp.jəˈleɪ.ʃən/", stress: "third" },
      { word: "possibility", transcription: "/ˌpɒs.əˈbɪl.ə.ti/", stress: "third" },
      { word: "presentation", transcription: "/ˌprez.ənˈteɪ.ʃən/", stress: "third" },
      { word: "production", transcription: "/prəˈdʌk.ʃən/", stress: "second" },
      { word: "psychology", transcription: "/saɪˈkɒl.ə.dʒi/", stress: "second" }
    ],
    Q: [
      { word: "qualification", transcription: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", stress: "fourth" },
      { word: "quality", transcription: "/ˈkwɒl.ə.ti/", stress: "first" },
      { word: "quantity", transcription: "/ˈkwɒn.tə.ti/", stress: "first" },
      { word: "question", transcription: "/ˈkwes.tʃən/", stress: "first" },
      { word: "quotation", transcription: "/kwəʊˈteɪ.ʃən/", stress: "second" }
    ],
    R: [
      { word: "recognition", transcription: "/ˌrek.əɡˈnɪʃ.ən/", stress: "third" },
      { word: "recommendation", transcription: "/ˌrek.ə.menˈdeɪ.ʃən/", stress: "fourth" },
      { word: "relationship", transcription: "/rɪˈleɪ.ʃən.ʃɪp/", stress: "second" },
      { word: "representative", transcription: "/ˌrep.rɪˈzen.tə.tɪv/", stress: "third" },
      { word: "reputation", transcription: "/ˌrep.jəˈteɪ.ʃən/", stress: "third" },
      { word: "responsibility", transcription: "/rɪˌspɒn.səˈbɪl.ə.ti/", stress: "fourth" },
      { word: "restaurant", transcription: "/ˈres.tər.ɒnt/", stress: "first" },
      { word: "revolution", transcription: "/ˌrev.əˈluː.ʃən/", stress: "third" }
    ],
    S: [
      { word: "satisfaction", transcription: "/ˌsæt.ɪsˈfæk.ʃən/", stress: "third" },
      { word: "scholarship", transcription: "/ˈskɒl.ə.ʃɪp/", stress: "first" },
      { word: "scientific", transcription: "/ˌsaɪ.ənˈtɪf.ɪk/", stress: "third" },
      { word: "secretary", transcription: "/ˈsek.rə.ter.i/", stress: "first" },
      { word: "security", transcription: "/sɪˈkjʊər.ə.ti/", stress: "second" },
      { word: "situation", transcription: "/ˌsɪt.juˈeɪ.ʃən/", stress: "third" },
      { word: "society", transcription: "/səˈsaɪ.ə.ti/", stress: "second" },
      { word: "solution", transcription: "/səˈluː.ʃən/", stress: "second" },
      { word: "statistics", transcription: "/stəˈtɪs.tɪks/", stress: "second" },
      { word: "strategy", transcription: "/ˈstræt.ə.dʒi/", stress: "first" }
    ],
    T: [
      { word: "technology", transcription: "/tekˈnɒl.ə.dʒi/", stress: "second" },
      { word: "television", transcription: "/ˈtel.ɪ.vɪ.ʒən/", stress: "first" },
      { word: "temperature", transcription: "/ˈtem.prə.tʃər/", stress: "first" },
      { word: "territory", transcription: "/ˈter.ə.tər.i/", stress: "first" },
      { word: "tradition", transcription: "/trəˈdɪʃ.ən/", stress: "second" },
      { word: "transportation", transcription: "/ˌtræn.spɔːˈteɪ.ʃən/", stress: "third" },
      { word: "treatment", transcription: "/ˈtriːt.mənt/", stress: "first" }
    ],
    U: [
      { word: "understanding", transcription: "/ˌʌn.dəˈstæn.dɪŋ/", stress: "third" },
      { word: "university", transcription: "/ˌjuː.nɪˈvɜː.sə.ti/", stress: "third" },
      { word: "unlimited", transcription: "/ʌnˈlɪm.ɪ.tɪd/", stress: "second" },
      { word: "unusual", transcription: "/ʌnˈjuː.ʒu.əl/", stress: "second" }
    ],
    V: [
      { word: "vacation", transcription: "/vəˈkeɪ.ʃən/", stress: "second" },
      { word: "valuable", transcription: "/ˈvæl.ju.ə.bəl/", stress: "first" },
      { word: "variety", transcription: "/vəˈraɪ.ə.ti/", stress: "second" },
      { word: "vegetable", transcription: "/ˈvedʒ.tə.bəl/", stress: "first" },
      { word: "vehicle", transcription: "/ˈviː.ə.kəl/", stress: "first" },
      { word: "victory", transcription: "/ˈvɪk.tər.i/", stress: "first" },
      { word: "vocabulary", transcription: "/vəˈkæb.jə.ler.i/", stress: "second" }
    ],
    W: [
      { word: "warehouse", transcription: "/ˈweər.haʊs/", stress: "first" },
      { word: "weakness", transcription: "/ˈwiːk.nəs/", stress: "first" },
      { word: "weather", transcription: "/ˈweð.ər/", stress: "first" },
      { word: "website", transcription: "/ˈweb.saɪt/", stress: "first" },
      { word: "welcome", transcription: "/ˈwel.kəm/", stress: "first" },
      { word: "western", transcription: "/ˈwes.tərn/", stress: "first" },
      { word: "whatever", transcription: "/wɒtˈev.ər/", stress: "second" },
      { word: "wonderful", transcription: "/ˈwʌn.də.fəl/", stress: "first" },
      { word: "workshop", transcription: "/ˈwɜːk.ʃɒp/", stress: "first" }
    ],
    X: [
      { word: "xenophobia", transcription: "/ˌzen.əˈfəʊ.bi.ə/", stress: "third" },
      { word: "xylophone", transcription: "/ˈzaɪ.lə.fəʊn/", stress: "first" }
    ],
    Y: [
      { word: "yesterday", transcription: "/ˈjes.tə.deɪ/", stress: "first" },
      { word: "yourself", transcription: "/jɔːˈself/", stress: "second" },
      { word: "younger", transcription: "/ˈjʌŋ.ɡər/", stress: "first" },
      { word: "yellow", transcription: "/ˈjel.əʊ/", stress: "first" }
    ],
    Z: [
      { word: "zero", transcription: "/ˈzɪə.rəʊ/", stress: "first" },
      { word: "zone", transcription: "/zəʊn/", stress: "first" },
      { word: "zoo", transcription: "/zuː/", stress: "first" }
    ]
  }

  // Phrasal verbs database (Expanded)
  const phrasalVerbs = [
    { word: "pick up", transcription: "/ˈpɪk ʌp/", stress: "first-second" },
    { word: "give up", transcription: "/ˈɡɪv ʌp/", stress: "first-second" },
    { word: "look after", transcription: "/ˈlʊk ˌæf.tər/", stress: "first-third" },
    { word: "turn on", transcription: "/ˈtɜːn ɒn/", stress: "first-second" },
    { word: "break down", transcription: "/ˈbreɪk daʊn/", stress: "first-second" },
    { word: "put off", transcription: "/ˈpʊt ɒf/", stress: "first-second" },
    { word: "get along", transcription: "/ˈɡet əˈlɒŋ/", stress: "first-third" },
    { word: "run out", transcription: "/ˈrʌn aʊt/", stress: "first-second" },
    { word: "bring up", transcription: "/ˈbrɪŋ ʌp/", stress: "first-second" },
    { word: "call off", transcription: "/ˈkɔːl ɒf/", stress: "first-second" },
    { word: "come across", transcription: "/ˈkʌm əˈkrɒs/", stress: "first-third" },
    { word: "cut down", transcription: "/ˈkʌt daʊn/", stress: "first-second" },
    { word: "deal with", transcription: "/ˈdiːl wɪð/", stress: "first-second" },
    { word: "drop off", transcription: "/ˈdrɒp ɒf/", stress: "first-second" },
    { word: "end up", transcription: "/ˈend ʌp/", stress: "first-second" },
    { word: "figure out", transcription: "/ˈfɪɡ.ər aʊt/", stress: "first-third" },
    { word: "get over", transcription: "/ˈɡet ˈəʊ.vər/", stress: "first-second" },
    { word: "hang out", transcription: "/ˈhæŋ aʊt/", stress: "first-second" },
    { word: "keep up", transcription: "/ˈkiːp ʌp/", stress: "first-second" },
    { word: "look forward", transcription: "/ˈlʊk ˈfɔː.wəd/", stress: "first-second" },
    { word: "make up", transcription: "/ˈmeɪk ʌp/", stress: "first-second" },
    { word: "pass away", transcription: "/ˈpɑːs əˈweɪ/", stress: "first-third" },
    { word: "set up", transcription: "/ˈset ʌp/", stress: "first-second" },
    { word: "take off", transcription: "/ˈteɪk ɒf/", stress: "first-second" },
    { word: "work out", transcription: "/ˈwɜːk aʊt/", stress: "first-second" }
  ]

  // Connected speech examples (Expanded)
  const connectedSpeechExamples = [
    {
      sentence: "I want to go",
      element: "Elision",
      explanation: "The 't' in 'want' is often dropped before 'to'",
      transcription: "/aɪ wɒn tə ɡəʊ/"
    },
    {
      sentence: "Did you eat?",
      element: "Assimilation",
      explanation: "The 'd' sound changes to match the following 'y' sound",
      transcription: "/dɪdʒ ju iːt/"
    },
    {
      sentence: "Good morning",
      element: "Liaison",
      explanation: "The 'd' links with the vowel sound in 'morning'",
      transcription: "/ɡʊd ˈmɔː.nɪŋ/"
    },
    {
      sentence: "I'll be there",
      element: "Coalescence",
      explanation: "Two sounds merge into one new sound",
      transcription: "/aɪl bi ðeər/"
    },
    {
      sentence: "What do you think?",
      element: "Assimilation",
      explanation: "The 't' in 'what' becomes 'd' before 'do'",
      transcription: "/wɒd də ju θɪŋk/"
    },
    {
      sentence: "I have to leave",
      element: "Elision",
      explanation: "The 'h' in 'have' is dropped",
      transcription: "/aɪ æv tə liːv/"
    },
    {
      sentence: "Can I help you?",
      element: "Liaison",
      explanation: "The 'n' in 'can' links with 'I'",
      transcription: "/kæn aɪ help ju/"
    },
    {
      sentence: "Would you like it?",
      element: "Coalescence",
      explanation: "'d' and 'y' sounds merge into /dʒ/",
      transcription: "/wʊdʒ ju laɪk ɪt/"
    },
    {
      sentence: "Next time",
      element: "Assimilation",
      explanation: "The 't' in 'next' becomes 'k' before 't'",
      transcription: "/neks taɪm/"
    },
    {
      sentence: "I don't know",
      element: "Elision",
      explanation: "The 't' in 'don't' is often dropped",
      transcription: "/aɪ dəʊn nəʊ/"
    },
    {
      sentence: "Let me see",
      element: "Liaison",
      explanation: "The 't' in 'let' links with 'me'",
      transcription: "/let mi siː/"
    },
    {
      sentence: "Could you help?",
      element: "Coalescence",
      explanation: "'d' and 'y' merge into /dʒ/",
      transcription: "/kʊdʒ ju help/"
    },
    {
      sentence: "Right now",
      element: "Assimilation",
      explanation: "The 't' in 'right' becomes 'p' before 'n'",
      transcription: "/raɪp naʊ/"
    },
    {
      sentence: "I must go",
      element: "Elision",
      explanation: "The 't' in 'must' is dropped before 'g'",
      transcription: "/aɪ mʌs ɡəʊ/"
    },
    {
      sentence: "Turn it off",
      element: "Liaison",
      explanation: "The 'n' in 'turn' links with 'it'",
      transcription: "/tɜːn ɪt ɒf/"
    },
    {
      sentence: "What's your name?",
      element: "Coalescence",
      explanation: "'t' and 's' merge into /ts/",
      transcription: "/wɒts jɔː neɪm/"
    },
    {
      sentence: "Last week",
      element: "Assimilation",
      explanation: "The 't' in 'last' becomes 'k' before 'w'",
      transcription: "/lɑːs wiːk/"
    },
    {
      sentence: "I can't believe it",
      element: "Elision",
      explanation: "The 't' in 'can't' is dropped",
      transcription: "/aɪ kæn bɪliːv ɪt/"
    },
    {
      sentence: "Come on in",
      element: "Liaison",
      explanation: "The 'e' in 'come' links with 'on'",
      transcription: "/kʌm ɒn ɪn/"
    },
    {
      sentence: "Nice to meet you",
      element: "Coalescence",
      explanation: "'s' and 't' merge smoothly",
      transcription: "/naɪs tə miːt ju/"
    }
  ]

  // Weak and strong forms (Expanded)
  const weakStrongForms = [
    {
      sentence: "I have been there",
      word: "have",
      position: 1,
      weakForm: "/həv/",
      strongForm: "/hæv/",
      correctForm: "weak",
      category: "auxiliary"
    },
    {
      sentence: "Yes, I have!",
      word: "have",
      position: 2,
      weakForm: "/həv/",
      strongForm: "/hæv/",
      correctForm: "strong",
      category: "auxiliary"
    },
    {
      sentence: "He is coming",
      word: "is",
      position: 1,
      weakForm: "/ɪz/",
      strongForm: "/ɪz/",
      correctForm: "weak",
      category: "auxiliary"
    },
    {
      sentence: "She can swim well",
      word: "can",
      position: 1,
      weakForm: "/kən/",
      strongForm: "/kæn/",
      correctForm: "weak",
      category: "auxiliary"
    },
    {
      sentence: "Yes, she can!",
      word: "can",
      position: 2,
      weakForm: "/kən/",
      strongForm: "/kæn/",
      correctForm: "strong",
      category: "auxiliary"
    },
    {
      sentence: "We are going home",
      word: "are",
      position: 1,
      weakForm: "/ə/",
      strongForm: "/ɑː/",
      correctForm: "weak",
      category: "auxiliary"
    },
    {
      sentence: "They were happy",
      word: "were",
      position: 1,
      weakForm: "/wə/",
      strongForm: "/wɜː/",
      correctForm: "weak",
      category: "auxiliary"
    },
    {
      sentence: "I will help you",
      word: "will",
      position: 1,
      weakForm: "/wɪl/",
      strongForm: "/wɪl/",
      correctForm: "weak",
      category: "auxiliary"
    },
    {
      sentence: "He told me about it",
      word: "me",
      position: 2,
      weakForm: "/mɪ/",
      strongForm: "/miː/",
      correctForm: "weak",
      category: "pronoun"
    },
    {
      sentence: "Who, me?",
      word: "me",
      position: 1,
      weakForm: "/mɪ/",
      strongForm: "/miː/",
      correctForm: "strong",
      category: "pronoun"
    },
    {
      sentence: "Give it to him",
      word: "him",
      position: 3,
      weakForm: "/ɪm/",
      strongForm: "/hɪm/",
      correctForm: "weak",
      category: "pronoun"
    },
    {
      sentence: "I saw her yesterday",
      word: "her",
      position: 2,
      weakForm: "/ə/",
      strongForm: "/hɜː/",
      correctForm: "weak",
      category: "pronoun"
    },
    {
      sentence: "Coffee and tea",
      word: "and",
      position: 1,
      weakForm: "/ən/",
      strongForm: "/ænd/",
      correctForm: "weak",
      category: "conjunction"
    },
    {
      sentence: "You and I",
      word: "and",
      position: 1,
      weakForm: "/ən/",
      strongForm: "/ænd/",
      correctForm: "strong",
      category: "conjunction"
    },
    {
      sentence: "I'm going to London",
      word: "to",
      position: 2,
      weakForm: "/tə/",
      strongForm: "/tuː/",
      correctForm: "weak",
      category: "preposition"
    },
    {
      sentence: "Where are you going to?",
      word: "to",
      position: 4,
      weakForm: "/tə/",
      strongForm: "/tuː/",
      correctForm: "strong",
      category: "preposition"
    },
    {
      sentence: "I live in London",
      word: "in",
      position: 2,
      weakForm: "/ɪn/",
      strongForm: "/ɪn/",
      correctForm: "weak",
      category: "preposition"
    },
    {
      sentence: "Come in!",
      word: "in",
      position: 1,
      weakForm: "/ɪn/",
      strongForm: "/ɪn/",
      correctForm: "strong",
      category: "preposition"
    },
    {
      sentence: "Look at this",
      word: "at",
      position: 1,
      weakForm: "/ət/",
      strongForm: "/æt/",
      correctForm: "weak",
      category: "preposition"
    },
    {
      sentence: "What are you looking at?",
      word: "at",
      position: 5,
      weakForm: "/ət/",
      strongForm: "/æt/",
      correctForm: "strong",
      category: "preposition"
    },
    {
      sentence: "This is my book",
      word: "this",
      position: 0,
      weakForm: "/ðɪs/",
      strongForm: "/ðɪs/",
      correctForm: "weak",
      category: "demonstrative"
    },
    {
      sentence: "Not this one, that one",
      word: "this",
      position: 1,
      weakForm: "/ðɪs/",
      strongForm: "/ðɪs/",
      correctForm: "strong",
      category: "demonstrative"
    },
    {
      sentence: "That was great",
      word: "that",
      position: 0,
      weakForm: "/ðət/",
      strongForm: "/ðæt/",
      correctForm: "weak",
      category: "demonstrative"
    },
    {
      sentence: "I want that!",
      word: "that",
      position: 2,
      weakForm: "/ðət/",
      strongForm: "/ðæt/",
      correctForm: "strong",
      category: "demonstrative"
    }
  ]

  const generateRandomWord = (category: string, subcategory?: string) => {
    if (category === "transcription") {
      const letters = Object.keys(wordDatabase)
      const randomLetter = letters[Math.floor(Math.random() * letters.length)]
      const wordsArray = (wordDatabase as any)[randomLetter]
      const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
      
      if (subcategory === "sentences") {
        const sentences = [
          { text: "The beautiful butterfly landed on the flower", transcription: "/ðə ˈbjuː.tɪ.fəl ˈbʌt.ə.flaɪ ˈlæn.dəd ɒn ðə ˈflaʊ.ər/" },
          { text: "Computer technology is advancing rapidly", transcription: "/kəmˈpjuː.tər tekˈnɒl.ə.dʒi ɪz ədˈvæn.sɪŋ ˈræp.ɪd.li/" },
          { text: "Academic research requires careful analysis", transcription: "/ˌæk.əˈdem.ɪk rɪˈsɜːtʃ rɪˈkwaɪərz ˈkeər.fəl əˈnæl.ə.sɪs/" }
        ]
        return sentences[Math.floor(Math.random() * sentences.length)]
      }
      
      if (subcategory === "paragraphs") {
        const paragraphs = [
          { 
            text: "The advancement of technology has revolutionized communication. People can now connect instantly across continents through various digital platforms.", 
            transcription: "/ði ədˈvæns.mənt əv tekˈnɒl.ə.dʒi həz ˌrev.əˈluː.ʃən.aɪzd kəˌmjuː.nɪˈkeɪ.ʃən. ˈpiː.pəl kən naʊ kəˈnekt ˈɪn.stənt.li əˈkrɒs ˈkɒn.tɪ.nənts θruː ˈveər.i.əs ˈdɪdʒ.ɪ.təl ˈplæt.fɔːmz./" 
          }
        ]
        return paragraphs[Math.floor(Math.random() * paragraphs.length)]
      }
      
      return { text: randomWord.word, transcription: randomWord.transcription }
    }
    
    if (category === "accent") {
      if (subcategory === "phrasal-verbs") {
        return phrasalVerbs[Math.floor(Math.random() * phrasalVerbs.length)]
      }
      
      if (subcategory === "two-syllable") {
        const twoSyllableWords = [
          { word: "Friday", transcription: "/ˈfraɪ.deɪ/", stress: "first" },
          { word: "hotel", transcription: "/həʊˈtel/", stress: "second" },
          { word: "happy", transcription: "/ˈhæp.i/", stress: "first" },
          { word: "about", transcription: "/əˈbaʊt/", stress: "second" },
          { word: "mother", transcription: "/ˈmʌð.ər/", stress: "first" }
        ]
        return twoSyllableWords[Math.floor(Math.random() * twoSyllableWords.length)]
      }
      
      if (subcategory === "three-syllable") {
        const threeSyllableWords = [
          { word: "computer", transcription: "/kəmˈpjuː.tər/", stress: "second" },
          { word: "beautiful", transcription: "/ˈbjuː.tɪ.fəl/", stress: "first" },
          { word: "important", transcription: "/ɪmˈpɔː.tənt/", stress: "second" },
          { word: "family", transcription: "/ˈfæm.ə.li/", stress: "first" },
          { word: "together", transcription: "/təˈɡeð.ər/", stress: "second" }
        ]
        return threeSyllableWords[Math.floor(Math.random() * threeSyllableWords.length)]
      }
    }
    
    if (category === "connected-speech") {
      return connectedSpeechExamples[Math.floor(Math.random() * connectedSpeechExamples.length)]
    }
    
    if (category === "weak-strong") {
      return weakStrongForms[Math.floor(Math.random() * weakStrongForms.length)]
    }
    
    return null
  }

  const startExercise = (category: string, subcategory?: string) => {
    const exercise = generateRandomWord(category, subcategory)
    setCurrentExercise(exercise)
    setUserInput("")
    setShowFeedback(false)
    setFeedback("")
    setSelectedSubcategory(subcategory || "")
  }

  const checkAnswer = () => {
    if (!currentExercise) return
    
    let isCorrect = false
    let correctAnswer = ""
    
    if (activeCategory === "transcription") {
      isCorrect = userInput.trim() === currentExercise.transcription
      correctAnswer = currentExercise.transcription
    } else if (activeCategory === "accent") {
      isCorrect = userInput.trim() === currentExercise.transcription
      correctAnswer = currentExercise.transcription
    } else if (activeCategory === "connected-speech") {
      isCorrect = userInput.toLowerCase().trim() === currentExercise.element.toLowerCase()
      correctAnswer = currentExercise.element
    } else if (activeCategory === "weak-strong") {
      isCorrect = userInput.toLowerCase().trim() === currentExercise.correctForm
      correctAnswer = `${currentExercise.correctForm} form: ${currentExercise.correctForm === 'weak' ? currentExercise.weakForm : currentExercise.strongForm}`
    }
    
    if (isCorrect) {
      setFeedback("✅ Correct! Well done!")
    } else {
      setFeedback(`❌ Incorrect. The correct answer is: ${correctAnswer}`)
    }
    setShowFeedback(true)
  }

  const ipaSymbols = {
    consonants: ["p", "b", "t", "d", "k", "ɡ", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", "m", "n", "ŋ", "l", "r", "j", "w", "tʃ", "dʒ"],
    pureVowels: ["iː", "ɪ", "ʊ", "uː", "e", "ə", "ɜː", "ɔː", "æ", "ʌ", "ɑː", "ɒ"],
    diphthongs: ["eɪ", "aɪ", "ɔɪ", "aʊ", "əʊ", "ɪə", "eə", "ʊə"],
    stress: ["ˈ", "ˌ", ".", "/", " "]
  }

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Phonetics Practice AI</h1>
          <p className="text-lg text-gray-600 mb-6">Master English phonetics with interactive exercises</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">IPA Transcription</Badge>
            <Badge variant="outline">Stress Patterns</Badge>
            <Badge variant="outline">Connected Speech</Badge>
            <Badge variant="outline">Weak & Strong Forms</Badge>
          </div>
        </header>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="transcription">Transcription</TabsTrigger>
            <TabsTrigger value="accent">Accent (Stress)</TabsTrigger>
            <TabsTrigger value="connected-speech">Connected Speech</TabsTrigger>
            <TabsTrigger value="weak-strong">Weak & Strong Forms</TabsTrigger>
          </TabsList>

          {/* TRANSCRIPTION CATEGORY */}
          <TabsContent value="transcription">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Transcription Practice</CardTitle>
                <p className="text-gray-600">Write the IPA transcription for words, sentences, or paragraphs</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button onClick={() => startExercise("transcription", "words")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Words</div>
                      <div className="text-sm opacity-75">Single word transcription</div>
                    </div>
                  </Button>
                  <Button onClick={() => startExercise("transcription", "sentences")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Sentences</div>
                      <div className="text-sm opacity-75">Full sentence transcription</div>
                    </div>
                  </Button>
                  <Button onClick={() => startExercise("transcription", "paragraphs")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Paragraphs</div>
                      <div className="text-sm opacity-75">Complete paragraph transcription</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ACCENT CATEGORY */}
          <TabsContent value="accent">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Accent (Stress) Practice</CardTitle>
                <p className="text-gray-600">Practice word and phrase stress patterns</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button onClick={() => startExercise("accent", "two-syllable")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Two-syllable Words</div>
                      <div className="text-sm opacity-75">e.g. Friday</div>
                    </div>
                  </Button>
                  <Button onClick={() => startExercise("accent", "three-syllable")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Three-syllable Words</div>
                      <div className="text-sm opacity-75">e.g. computer</div>
                    </div>
                  </Button>
                  <Button onClick={() => startExercise("accent", "phrasal-verbs")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Phrasal Verbs</div>
                      <div className="text-sm opacity-75">e.g. pick up</div>
                    </div>
                  </Button>
                  <Button onClick={() => startExercise("accent", "complex-words")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Complex Words</div>
                      <div className="text-sm opacity-75">e.g. loudness</div>
                    </div>
                  </Button>
                  <Button onClick={() => startExercise("accent", "compound-words")} className="h-20">
                    <div className="text-center">
                      <div className="font-semibold">Compound Words</div>
                      <div className="text-sm opacity-75">e.g. car keys</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CONNECTED SPEECH CATEGORY */}
          <TabsContent value="connected-speech">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Elements of Simplification</CardTitle>
                <p className="text-gray-600">Identify connected speech elements in spoken sentences</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Assimilation", "Coalescence", "Elision", "Syncope", "Epenthesis", "Aphesis", "Liaison", "Juncture"].map((element) => (
                    <Badge key={element} variant="outline" className="p-2 text-center">
                      {element}
                    </Badge>
                  ))}
                </div>
                <Button onClick={() => startExercise("connected-speech")} className="w-full h-16">
                  <div className="text-center">
                    <div className="font-semibold">Start Connected Speech Exercise</div>
                    <div className="text-sm opacity-75">Identify the simplification element</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* WEAK & STRONG FORMS CATEGORY */}
          <TabsContent value="weak-strong">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Weak and Strong Forms</CardTitle>
                <p className="text-gray-600">Identify weak or strong forms of grammatical words</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Auxiliary verbs", "Pronouns", "Conjunctions", "Prepositions", "Demonstratives"].map((category) => (
                    <Badge key={category} variant="outline" className="p-3 text-center">
                      {category}
                    </Badge>
                  ))}
                </div>
                <Button onClick={() => startExercise("weak-strong")} className="w-full h-16">
                  <div className="text-center">
                    <div className="font-semibold">Start Weak/Strong Forms Exercise</div>
                    <div className="text-sm opacity-75">Identify the correct form</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* EXERCISE AREA */}
        {currentExercise && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Current Exercise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold mb-4">
                  {currentExercise.text || currentExercise.word || currentExercise.sentence}
                </div>
                {activeCategory === "connected-speech" && (
                  <p className="text-gray-600">{currentExercise.explanation}</p>
                )}
                {activeCategory === "weak-strong" && (
                  <p className="text-gray-600">
                    Focus on the word: <span className="font-bold text-blue-600">{currentExercise.word}</span>
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {activeCategory === "transcription" || activeCategory === "accent" ? (
                  <Textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter your IPA transcription here..."
                    className="min-h-20"
                  />
                ) : (
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder={
                      activeCategory === "connected-speech" 
                        ? "Enter the simplification element (e.g., Assimilation)" 
                        : "Enter 'weak' or 'strong'"
                    }
                  />
                )}

                <div className="flex gap-4">
                  <Button onClick={checkAnswer} className="flex-1">
                    Check Answer
                  </Button>
                  <Button onClick={() => startExercise(activeCategory, selectedSubcategory)} variant="outline">
                    Next Exercise
                  </Button>
                  <Dialog open={showKeyboard} onOpenChange={setShowKeyboard}>
                    <DialogTrigger asChild>
                      <Button variant="outline">IPA Keyboard</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[50vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-lg">IPA Keyboard</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Pure Vowels</h4>
                          <div className="grid grid-cols-12 gap-1">
                            {ipaSymbols.pureVowels.map((symbol) => (
                              <Button
                                key={symbol}
                                onClick={() => setUserInput((prev) => prev + symbol)}
                                className="h-8 text-sm p-1 min-w-0"
                                variant="outline"
                              >
                                {symbol}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Diphthongs</h4>
                          <div className="grid grid-cols-8 gap-1">
                            {ipaSymbols.diphthongs.map((symbol) => (
                              <Button
                                key={symbol}
                                onClick={() => setUserInput((prev) => prev + symbol)}
                                className="h-8 text-sm p-1 min-w-0"
                                variant="outline"
                              >
                                {symbol}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Consonants</h4>
                          <div className="grid grid-cols-12 gap-1">
                            {ipaSymbols.consonants.map((symbol) => (
                              <Button
                                key={symbol}
                                onClick={() => setUserInput((prev) => prev + symbol)}
                                className="h-8 text-sm p-1 min-w-0"
                                variant="outline"
                              >
                                {symbol}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2 text-sm">Stress & Symbols</h4>
                          <div className="grid grid-cols-7 gap-1">
                            {ipaSymbols.stress.map((symbol) => (
                              <Button
                                key={symbol}
                                onClick={() => setUserInput((prev) => prev + symbol)}
                                className="h-8 text-sm p-1 min-w-0"
                                variant="outline"
                              >
                                {symbol === " " ? "Space" : symbol}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {showFeedback && (
                  <div className={`p-4 rounded-lg ${feedback.includes("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {feedback}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* FOOTER */}
        <footer className="mt-12 text-center text-gray-500">
          <p>Practice English phonetics with unlimited examples from A to Z</p>
          <p className="text-sm mt-2">Built with comprehensive IPA transcription system</p>
        </footer>
      </div>
    </div>
  )
}
