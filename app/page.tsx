"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, LinkedinIcon as LinkedIn, Download, ArrowRight, Globe } from "lucide-react"

export default function CVJulianLombardoATS() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-gray-900/95 backdrop-blur-sm shadow-2xl border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-8">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 via-blue-200 to-green-200 bg-clip-text text-transparent mb-3">
                JULIÁN LOMBARDO EZEQUIEL
              </h1>
              <h2 className="text-xl text-blue-400 font-semibold mb-4">
                Digital Quality Analyst | ISO Auditor | Automation Specialist
              </h2>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>julianlombardo.iso@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedIn className="w-4 h-4 text-blue-400" />
                  <span>linkedin.com/in/julianlombardo</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-400" />
                  <span>100% Remote Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Professional Summary */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">PROFESSIONAL SUMMARY</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  <strong className="text-blue-400">Digital Quality Analyst</strong> with 10+ years of experience
                  leading ISO 9001, 14001, 45001, and 27001 remote audits across manufacturing, municipal, and
                  consulting sectors. Specialized in{" "}
                  <strong className="text-green-400">
                    automation of audit processes using Power BI, Google Drive API, and Python scripts
                  </strong>
                  , achieving 30% reduction in inspection times and 40% decrease in workplace incidents.
                </p>
                <p>
                  Expert in <strong className="text-blue-400">Lean Six Sigma methodologies</strong> and{" "}
                  <strong className="text-green-400">Agile Scrum frameworks</strong>, with proven track record of
                  implementing digital transformation initiatives that generated 15% average operational savings.
                  Proficient in <strong className="text-blue-400">cloud-based compliance solutions</strong> and{" "}
                  <strong className="text-green-400">data analytics for predictive auditing</strong>.
                </p>
                <p>
                  Seeking remote opportunities in{" "}
                  <strong className="text-blue-400">Quality & Compliance Digital</strong> roles where I can leverage my
                  expertise in{" "}
                  <strong className="text-green-400">RPA, Digital Twin technologies, and Compliance as Code</strong> to
                  drive organizational excellence and regulatory adherence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Core Competencies */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">CORE COMPETENCIES</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Quality & Compliance</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• ISO 9001, 14001, 45001, 27001 Lead Auditor</li>
                    <li>• Remote Audit Methodologies</li>
                    <li>• Lean Six Sigma Green Belt</li>
                    <li>• Risk Management & Compliance Digital</li>
                    <li>• Integrated Management Systems</li>
                    <li>• Compliance as Code Implementation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Technical Skills</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Power BI & Advanced Excel Analytics</li>
                    <li>• Python Scripts for Process Automation</li>
                    <li>• Google Drive API Integration</li>
                    <li>• SQL Database Management</li>
                    <li>• RPA (Robotic Process Automation)</li>
                    <li>• Digital Twin Technologies</li>
                    <li>• Cloud Platforms (Google Workspace)</li>
                    <li>• Agile Scrum & Kanban Methodologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">WORK EXPERIENCE</h2>

              <div className="space-y-6">
                {/* Current Position */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">Digital Quality Analyst</h3>
                      <p className="text-blue-400 font-medium">Municipalidad de Tres de Febrero</p>
                      <p className="text-gray-400 text-sm">Buenos Aires, Argentina (100% Remote)</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-1 md:mt-0">February 2025 - Present</div>
                  </div>
                  <p className="text-gray-300 italic mb-3 text-sm">
                    Leading digital transformation of municipal audit and compliance processes through automation and
                    data analytics
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>Implemented digital audit system</strong> using Power BI and Google Drive API, reducing
                      inspection times by 30% and improving compliance tracking efficiency
                    </li>
                    <li>
                      • <strong>Developed predictive KPIs for workplace safety</strong> that decreased labor incidents
                      by 40% through proactive risk identification and mitigation strategies
                    </li>
                    <li>
                      • <strong>Automated compliance reporting processes</strong> using Python scripts and cloud
                      integration, eliminating 25+ hours of manual work weekly
                    </li>
                    <li>
                      • <strong>Trained 25+ municipal officials</strong> in digital audit methodologies and new
                      compliance technologies, ensuring smooth organizational transition
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">Power BI</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">
                      Google Drive API
                    </Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">Python</Badge>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-xs">ISO 45001</Badge>
                    <Badge className="bg-red-600/20 text-red-400 border-red-500/30 text-xs">Risk Management</Badge>
                  </div>
                </div>

                {/* Previous Positions */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">Senior ISO & Lean Six Sigma Consultant</h3>
                      <p className="text-blue-400 font-medium">GP Industrial Asesoría</p>
                      <p className="text-gray-400 text-sm">Buenos Aires, Argentina</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-1 md:mt-0">2021 - 2023</div>
                  </div>
                  <p className="text-gray-300 italic mb-3 text-sm">
                    Specialized consultant in management systems implementation and continuous improvement methodologies
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>Led ISO 9001/14001/45001 remote audits</strong> for 15+ companies with zero
                      non-conformities, establishing new industry standards for virtual compliance assessment
                    </li>
                    <li>
                      • <strong>Implemented Lean Six Sigma projects</strong> generating average 15% operational cost
                      savings across manufacturing and service sectors
                    </li>
                    <li>
                      • <strong>Developed proprietary remote audit methodology</strong> during COVID-19 pandemic,
                      maintaining 100% audit effectiveness while reducing travel costs by 80%
                    </li>
                    <li>
                      • <strong>Trained 50+ internal auditors</strong> in ISO standards and digital audit tools,
                      creating sustainable compliance capabilities within client organizations
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">ISO 9001</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">Lean Six Sigma</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">
                      Remote Auditing
                    </Badge>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-xs">
                      Process Improvement
                    </Badge>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">Quality & Systems Manager</h3>
                      <p className="text-blue-400 font-medium">Plimer S.A.</p>
                      <p className="text-gray-400 text-sm">Buenos Aires, Argentina</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-1 md:mt-0">2017 - 2019</div>
                  </div>
                  <p className="text-gray-300 italic mb-3 text-sm">
                    Responsible for comprehensive quality management and ISO standards transition
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>Successfully transitioned ISO 9001:2008 to ISO 9001:2015</strong> with zero
                      non-conformities, ensuring seamless compliance continuity
                    </li>
                    <li>
                      • <strong>Integrated Google Drive API for automated document tracking</strong>, creating digital
                      traceability system that improved process efficiency by 20%
                    </li>
                    <li>
                      • <strong>Reduced internal audit time by 25%</strong> through digitization of audit processes and
                      implementation of cloud-based quality management systems
                    </li>
                    <li>
                      • <strong>Implemented Digital Twin concepts</strong> for quality control processes, enabling
                      predictive maintenance and proactive quality assurance
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">ISO 9001:2015</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">
                      Google Drive API
                    </Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">
                      Digital Twin
                    </Badge>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-xs">
                      Process Automation
                    </Badge>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">Senior Quality Analyst</h3>
                      <p className="text-blue-400 font-medium">Praxair S.R.L.</p>
                      <p className="text-gray-400 text-sm">Buenos Aires, Argentina</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-1 md:mt-0">2014 - 2016</div>
                  </div>
                  <p className="text-gray-300 italic mb-3 text-sm">
                    Process optimization specialist focused on data analytics and operational efficiency
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>Reduced operational costs by 15%</strong> through advanced Power BI data analytics and
                      process optimization initiatives
                    </li>
                    <li>
                      • <strong>Developed real-time quality control dashboards</strong> enabling immediate
                      decision-making and proactive quality management
                    </li>
                    <li>
                      • <strong>Implemented KPI management system</strong> that improved organizational decision-making
                      speed by 30% and accuracy by 25%
                    </li>
                    <li>
                      • <strong>Led continuous improvement project</strong> resulting in 12% productivity increase
                      through Lean methodologies and data-driven insights
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">Power BI</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">Data Analytics</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">
                      KPI Management
                    </Badge>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-xs">
                      Process Optimization
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Projects */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">FEATURED PROJECTS</h2>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">Digital Audit System Implementation</h3>
                    <span className="text-gray-400 text-sm">2018-2019</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-2">Plimer S.A.</p>
                  <p className="text-gray-300 text-sm mb-3">
                    Developed and implemented comprehensive digital audit system integrating Google Drive API, Power BI
                    analytics, and automated Excel VBA processes for streamlined inspection and compliance tracking.
                  </p>
                  <div className="bg-green-600/10 rounded-lg p-2 mb-3 border border-green-500/20">
                    <p className="text-green-300 font-medium text-sm">
                      Impact: 30% reduction in audit completion time, 100% digital traceability
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">Google Drive API</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">Power BI</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">Excel VBA</Badge>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-xs">
                      Process Automation
                    </Badge>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">Municipal Safety KPI Dashboard</h3>
                    <span className="text-gray-400 text-sm">2025</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-2">Municipalidad de Tres de Febrero</p>
                  <p className="text-gray-300 text-sm mb-3">
                    Created real-time Power BI dashboards for workplace safety monitoring, integrating SQL databases and
                    predictive analytics for incident prevention and compliance tracking.
                  </p>
                  <div className="bg-green-600/10 rounded-lg p-2 mb-3 border border-green-500/20">
                    <p className="text-green-300 font-medium text-sm">
                      Impact: 40% reduction in workplace incidents, real-time compliance monitoring
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">Power BI</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">SQL</Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">
                      Predictive Analytics
                    </Badge>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-xs">
                      Real-time Monitoring
                    </Badge>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">Remote Audit Methodology Framework</h3>
                    <span className="text-gray-400 text-sm">2021-2022</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-2">GP Industrial Asesoría</p>
                  <p className="text-gray-300 text-sm mb-3">
                    Developed proprietary remote audit methodology combining cloud technologies, digital verification
                    tools, and virtual collaboration platforms for ISO compliance assessment during pandemic
                    restrictions.
                  </p>
                  <div className="bg-green-600/10 rounded-lg p-2 mb-3 border border-green-500/20">
                    <p className="text-green-300 font-medium text-sm">
                      Impact: 100% successful remote audits, 80% cost reduction, industry standard adoption
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">Remote Auditing</Badge>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">
                      Cloud Technologies
                    </Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">
                      ISO Standards
                    </Badge>
                    <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 text-xs">
                      Digital Verification
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">EDUCATION</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Tecnicatura en Seguridad e Higiene Laboral</h3>
                  <p className="text-blue-400 font-medium">Universidad Tecnológica Nacional (UTN)</p>
                  <p className="text-gray-400 text-sm">In Progress - Expected June 2026</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">Diplomatura en Dirección de Proyectos</h3>
                  <p className="text-blue-400 font-medium">Instituto de Gestión</p>
                  <p className="text-gray-400 text-sm">Completed 2020</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">CERTIFICATIONS</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Current Certifications</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>ISO 9001:2015 Lead Auditor</strong> - IRAM (2019)
                    </li>
                    <li>
                      • <strong>ISO 14001:2015 Internal Auditor</strong> - IRAM (2018)
                    </li>
                    <li>
                      • <strong>ISO 45001:2018 Lead Auditor</strong> - IRAM (2020)
                    </li>
                    <li>
                      • <strong>Lean Six Sigma Green Belt</strong> - ASQ (2021)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Planned 2025</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>ISO 27001 Lead Auditor</strong>
                    </li>
                    <li>
                      • <strong>Lean Six Sigma Black Belt</strong>
                    </li>
                    <li>
                      • <strong>Microsoft Power BI Data Analyst</strong>
                    </li>
                    <li>
                      • <strong>Agile Professional (SAFe)</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">TECHNICAL SKILLS</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Analytics & BI</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Power BI (Advanced)</li>
                    <li>• Excel Advanced Analytics</li>
                    <li>• SQL Database Management</li>
                    <li>• Data Visualization</li>
                    <li>• Predictive Analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Automation & Development</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Python Scripts</li>
                    <li>• Google Drive API</li>
                    <li>• RPA Implementation</li>
                    <li>• Excel VBA</li>
                    <li>• Process Automation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Cloud & Collaboration</h3>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Google Workspace</li>
                    <li>• Cloud Integration</li>
                    <li>• Git/GitHub</li>
                    <li>• Jira Project Management</li>
                    <li>• Digital Twin Technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">LANGUAGES</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">Spanish</h3>
                  <p className="text-gray-400">Native</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">English</h3>
                  <p className="text-gray-400">Upper Intermediate</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">Portuguese</h3>
                  <p className="text-gray-400">Intermediate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Remote Work Readiness */}
          <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                REMOTE WORK READINESS & COLLABORATION TOOLS
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Remote Work Experience</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>4+ years of remote work experience</strong> across consulting and municipal sectors
                    </li>
                    <li>
                      • <strong>Developed remote audit methodologies</strong> with 100% success rate during COVID-19
                    </li>
                    <li>
                      • <strong>Managed distributed teams</strong> across multiple time zones and geographic locations
                    </li>
                    <li>
                      • <strong>Self-directed project management</strong> with consistent delivery of results on time
                      and budget
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Collaboration Technologies</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • <strong>Video Conferencing:</strong> Zoom, Google Meet, Microsoft Teams
                    </li>
                    <li>
                      • <strong>Project Management:</strong> Jira, Trello, Asana, Monday.com
                    </li>
                    <li>
                      • <strong>Communication:</strong> Slack, Microsoft Teams, WhatsApp Business
                    </li>
                    <li>
                      • <strong>Document Collaboration:</strong> Google Workspace, Microsoft 365, SharePoint
                    </li>
                    <li>
                      • <strong>Version Control:</strong> Git, GitHub, Google Drive versioning
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-600/10 rounded-lg border border-green-500/20">
                <p className="text-green-300 font-medium text-center">
                  Available for immediate start • 100% Remote • Flexible time zones • Proven track record of remote
                  delivery excellence
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600/90 to-green-600/90 border-0 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-white">Ready to Drive Digital Quality Excellence</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Seeking remote opportunities in Quality & Compliance Digital roles where I can leverage my expertise
                  in automation, data analytics, and ISO standards to deliver measurable business impact.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-white/90 text-blue-600 hover:bg-white font-semibold px-4 py-2 border-0">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button className="bg-gray-800/80 text-white hover:bg-gray-800 font-semibold px-4 py-2 border-0">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button className="bg-blue-700/80 text-white hover:bg-blue-700 font-semibold px-4 py-2 border-0">
                  <LinkedIn className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gray-900/95 border-t border-gray-800 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Julián Lombardo Ezequiel - Digital Quality Analyst | ISO Auditor | Automation Specialist
          </p>
          <p className="text-gray-500 text-xs mt-1">
            ATS-Optimized CV • 10+ Years ISO Experience • 100% Remote Available • Immediate Start
          </p>
        </div>
      </footer>
    </div>
  )
}
