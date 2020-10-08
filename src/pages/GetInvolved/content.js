import CONSTANT from 'constant'

export default {
  title: 'Es ist der Beginn eines neuen Webs.\n Helfen Sie uns, es zu erstellen.',
  pageDesc: 'Das SAFE Network ist eine Open-Source-Zusammenarbeit zwischen Entwicklern und der Gemeinde, die es verwendet. Sie können sich engagieren, indem Sie testen, vorschlagen, verschlüsseln oder fördern. Hier ist wie.',
  develop: {
    trySafeNet: {
      title: 'Probieren Sie das SAFE Network aus',
      para: [
        'SAFE wird die Art und Weise ändern, wie wir mit dem Web und unseren eigenen Daten zusammenwirken. Ein so großer Sprung erfordert kontinuierliche Tests und Rückmeldungen der Personen, für die er entwickelt wurde- und hier können Sie helfen.',
        'Laden Sie den SAFE Browser herunter, um im Netzwerk zu surfen oder treten Sie der Gemeinde bei und werden Sie einer von vielen, die Rückmeldung geben, zum Code beitragen und im Wesentlichen das Netzwerk gestalten.'
      ]
    },
    startDevelop: {
      title: 'Beginnen Sie mit der Entwicklung auf SAFE',
      para: [
        'Das SAFE-Netzwerk ist eine Plattform zum Erstellen dezentraler Apps. Es ist sicher, datenschutzorientiert, verfügt über eine integrierte Einnahmequelle und nahezu keine Infrastrukturkosten.',
        'Derzeit werden einfachere APIs für Entwickler entwickelt. Daher muss die Dokumentation noch finalisiert werden, Sie können jedoch auf die neueste SAFE-API-Dokumentation in diesem Repo zugreifen.'
      ],
      CTA: {
        name: 'SAFE API GitHub Repo',
        url: 'https://github.com/maidsafe/safe-api/blob/master/README.md'
      }
    },
    joinForum: {
      title: 'Treten Sie der Entwicklergemeinde bei',
      para: [
        'Neben dem Entwicklerhub gibt es auch ein wachsendes Entwicklerforum. Dies ist eine großartige Möglichkeit, Unterstützung zu erhalten und zusammenzuarbeiten.'
      ],
      CTA: {
        name: 'Entwicklerforum',
        url: 'https://forum.safedev.org'
      }
    },
    coreNetwork: {
      title: 'Helfen Sie beim Aufbau des Kernnetzwerks',
      para: [
        'Sie können sich auch beteiligen, indem Sie die Netzwerke unterstützen, die Open-Source-Bibliotheken zugrunde liegen. Mit dem Betaabwurf können wir in Safecoin für die Fehlerbehebung, die Codeoptimierung und die Entwicklung neuer Funktionen entschädigt werden.'
      ],
      CTA: {
        name: 'Tragen Sie zu GitHub bei',
        url: 'https://github.com/maidsafe/'
      }
    }
  },
  engage: {
    community: {
      title: 'Sei ein Teil der Gemeinde',
      para: [
        'Das SAFE Network Gemeinde besteht aus Tausenden von Menschen aus der ganzen Welt, die sich für den uneingeschränkten Zugriff und die gemeinsame Datennutzung begeistern.',
        'The SAFE Network Forum ist das Hauptdiskussionsforum dieser wachsenden Gemeinde und ein großartiger Ort, um neue Entwicklungsteamversionen zu testen, Unterstützung zu erhalten, die neuesten Internettendenzen zu diskutieren und die wöchentlichen Entwicklersaktualisierungen zu lesen. Um andere persönlich zu treffen, werfen Sie einen Blick auf die verschiedenen lockeren Treffen, die auf der ganzen Welt stattfinden.'
      ],
      CTA: {
        name: 'Treten Sie dem Forum bei',
        url: 'https://safenetforum.org'
      }
    },
    subscribe: {
      title: 'Auf dem Laufenden bleiben'
    }
  },
  invite: {
    title: 'LOSLEGEN',
    joinNetwork: {
      id: 'joinNetwork',
      title: 'Stellen Sie eine Verbindung zum öffentlichen Shared-Bereich von Baby Fleming her',
      para: 'Dieser gemeinsam genutzte Abschnitt wird auf DigitalOcean gehostet und besteht aus acht Tresoren auf acht separaten Tröpfchen, die alle in einem Abschnitt miteinander verbunden sind. Bitte beachten Sie, dass dieses Testnetz möglicherweise heruntergefahren werden muss.',
      CTA: {
        button: {
          name: 'Mehr erfahren',
          url: 'https://safenetforum.org/t/baby-fleming-public-shared-section/31377'
        },
        link: {
          name: 'CLI Benutzerhandbuch',
          url: 'https://github.com/maidsafe/safe-api/blob/master/safe-cli/README.md#download'
        }
      }
    },
    installBrowser: {
      id: 'installBrowser',
      title: 'Installieren Sie den SAFE Browser',
      para: 'Holen Sie sich den neuesten SAFE Browser, um noch heute im Netzwerk zu surfen!',
      CTA: {
        button: {
          name: 'Herunterladen für',
          url: '/'
        },
        link: {
          name: 'Mehr Optionen',
          url: CONSTANT.downloadApps.browser.others
        }
      }
    },
    feedback: {
      id: 'feedback',
      title: 'Rückmeldung & Beitrag',
      para: 'Der Aufbau des SAFE Networks ist eine Gruppenanstrengung. Sie können helfen, indem Sie Vorschläge machen, Fehler melden oder Code beisteuern.',
      CTA: {
        button: {
          name: 'Treten Sie der Gemeinde bei',
          url: 'https://safenetforum.org'
        }
      }
    }
  },
  faqs: {
   sections: [
    {
      title: 'Erste Schritte: Häufig gestellte Fragen',
      items: [
        {
          question: 'Wie kann ich mich in der SAFE Network-Community engagieren?',
          answer: [
            'Die Community ist im [SAFE Network Forum](https://safenetforum.org/) am aktivsten und wir empfehlen, im Abschnitt für [Anfänger zu beginnen](https://safenetforum.org/c/beginners )',
            '_[Besuchen Sie das Forum](https://safenetforum.org/)_'
          ]
        },
        {
          question: 'Wie bekomme ich Hilfe?',
          answer: [
            'Das [SAFE Network Forum](https://safenetforum.org) ist der Ort, an dem Sie alle Fragen im Netzwerk beantworten können.',
            '_[Besuchen Sie das Forum](https://safenetforum.org/)_'
          ]
        }
      ]
    },
   ],
   CTA: {
     name: 'Weitere FAQs',
     url: '/faq'
   }
  }
}
