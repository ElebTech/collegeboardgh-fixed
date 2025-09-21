import React, { useState } from 'react'
import { UNIVERSITIES, SCHOLARSHIPS } from './data'
import Logo from './logo.svg'

function Icon({name, active}){
  const cls = active ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-400'
  if(name==='home') return (<svg className={'w-6 h-6 '+cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 4l9 5.75V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.75z" /></svg>)
  if(name==='uni') return (<svg className={'w-6 h-6 '+cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.5H6a12.083 12.083 0 01-.16-9.922L12 14z" /></svg>)
  if(name==='sch') return (<svg className={'w-6 h-6 '+cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2v6h6v-6c0-1.105-1.343-2-3-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3" /></svg>)
  if(name==='apply') return (<svg className={'w-6 h-6 '+cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V12" /></svg>)
  return null
}

export default function App(){
  const [tab, setTab] = useState('home')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-xl mx-auto p-4">
        <header className="mb-4 text-center">
          <img src={Logo} alt="CollegeBoard Ghana" className="mx-auto w-20 h-20"/>
          <h1 className="text-2xl font-bold mt-2">CollegeBoard Ghana</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Universities, Scholarships & Admissions in Ghana</p>
        </header>

        <main>
          {tab==='home' && (
            <section className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <h2 className="font-semibold">Welcome</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Discover universities and scholarships in Ghana. Use the tabs below to navigate.</p>
              </div>
            </section>
          )}

          {tab==='universities' && (
            <section className="space-y-3">
              <h2 className="text-lg font-semibold">Universities</h2>
              <div className="space-y-3">
                {UNIVERSITIES.map(u=> (
                  <a key={u.id} href={u.website} target="_blank" rel="noreferrer" className="block bg-white dark:bg-gray-800 p-3 rounded shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{u.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{u.city} — {u.region}</div>
                      </div>
                      <div className="text-sm text-blue-500">Visit</div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {tab==='scholarships' && (
            <section className="space-y-3">
              <h2 className="text-lg font-semibold">Scholarships</h2>
              {SCHOLARSHIPS.map(s=> (
                <div key={s.id} className="bg-white dark:bg-gray-800 p-3 rounded shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{s.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{s.eligibility}</div>
                    </div>
                    <div className="text-xs text-gray-500">{s.deadline}</div>
                  </div>
                  <div className="mt-2">
                    <a href={s.link} target="_blank" rel="noreferrer" className="text-sm text-blue-400">More</a>
                  </div>
                </div>
              ))}
            </section>
          )}

          {tab==='apply' && (
            <section className="space-y-3">
              <h2 className="text-lg font-semibold">How to Apply</h2>
              <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">
                <ol className="list-decimal ml-5 text-sm">
                  <li>Check the university's official admissions page for requirements and deadlines.</li>
                  <li>Prepare your certificates (WASSCE/SSSCE), transcripts and passport photo.</li>
                  <li>Create an account on the admissions portal and complete the application.</li>
                  <li>Upload documents and submit. Pay applicable fees where required.</li>
                </ol>
              </div>
            </section>
          )}
        </main>
      </div>

      <nav className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow px-4 py-2 flex justify-between items-center" style={{margin:'0 12px'}}>
          <button onClick={()=>setTab('home')} className="flex flex-col items-center text-xs">
            <Icon name="home" active={tab==='home'} />
            <span className={tab==='home' ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400'}>Home</span>
          </button>
          <button onClick={()=>setTab('universities')} className="flex flex-col items-center text-xs">
            <Icon name="uni" active={tab==='universities'} />
            <span className={tab==='universities' ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400'}>Universities</span>
          </button>
          <button onClick={()=>setTab('scholarships')} className="flex flex-col items-center text-xs">
            <Icon name="sch" active={tab==='scholarships'} />
            <span className={tab==='scholarships' ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400'}>Scholarships</span>
          </button>
          <button onClick={()=>setTab('apply')} className="flex flex-col items-center text-xs">
            <Icon name="apply" active={tab==='apply'} />
            <span className={tab==='apply' ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400'}>Apply</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
