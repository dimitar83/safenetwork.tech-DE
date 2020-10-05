export default {
  banner: {
    pageTitle: 'Das unmögliche Netzwerk',
    pageDesc: `14 Jahre Forschung und Entwicklung werden zur Verwirklichung als wir die letzten Bausteine für das zusammenstellen, was einige für unmöglich hielten: Sicherer Zugang für alle.`,
    latestUpdate: {
      overline: 'Letzte Aktualisierung',
      date: 'March 26, 2020',
      title: 'Baby Fleming Wiederholung 3',
      para: `In der Baby Fleming-Version geht es darum, von einem einzelnen Tresornetzwerk in ein Netzwerk mit mehreren Tresoren (einzelne Abschnitte) zu iterieren. Iteration 3 wurde aktualisiert, um die neueste Version der Quinn-Bibliothek zu verwenden (über quic-p2p).`,
       CTA: {
         name: 'SAFE Network Forum',
         url: 'https://safenetforum.org/t/safe-network-dev-update-march-26-2020/31360'
       }
    }
  },
  subscribe: {
    title: 'Abonnieren Sie sich für Updates:'
  },
  releases: {
    release1: {
      overline: 'JETZT LIVE',
      title: 'Baby Fleming Netzwerk',
      para:[
        `Aus Anwendersicht werden von Baby Fleming genau die gleichen Operationen und Anwendungsfälle wie in Tresorphase 1 unterstützt, d. H. Test Safecoin, Brieftaschen, Dateien, NRS-Namen, SAFE-Sites usw.`,
        'Wir haben einen [öffentlichen gemeinsamen Bereich](https://safenetforum.org/t/baby-fleming-public-shared-section/31377) eingerichtet , mit dem Sie spielen können. Sie können auch Ihr eigenes lokales Netzwerk einrichten. Ausführliche Anweisungen finden Sie im [CLI-Benutzerhandbuch](https://github.com/maidsafe/safe-api/blob/master/safe-cli/README.md#download).'
      ],
      // accordion: {
      //   header: [
      //     'The Share Vault Network Feature',
      //     'Description',
      //     'Status'
      //   ],
      //   items: [
      //   ]
      // }
    },
    release2: {
      overline: 'KOMMENDER MEILENSTEIN',
      title: 'SAFE Fleming Netzwerk',
      para: ['Der nächste wichtige Meilenstein für das SAFE Network.Während das gemeinsame Tresor Netzwerks weiterhin funktioniert, handelt es sich um ein eigenständiges Netzwerk, mit dem Einzelpersonen Tresors ausführen können - dezentralisierten Speicher von Heimcomputern. Die Veröffentlichung von Fleming wird aus vielen Gründen bemerkenswert sein, nicht zuletzt aufgrund der Tatsache, dass das Netzwerk mit der Datenspeicherung jetzt auch Test Safecoin enthält.'],
      accordion: {
        header: [
          'Fleming Funktion',
          'Beschreibung',
          'Status'
        ],
        items: [
          {
            feature: 'Selbstauthentifizierung',
            desc: 'Die Möglichkeit, sich ohne Erlaubnis oder Existenz eines Dritten in ein dezentralisiertes Netzwerk einzuloggen',
            status: 'Komplett',
            para: [
              'MaidSafe hat die Technologie erfunden, mit der sich jemand sicher in ein dezentralisiertes Netzwerk einloggen kann, ohne die Einbeziehung eines Dritten zu erfordern. Das gemeinsame Tresor Netzwerk ist heute der einzige Ort auf der Welt, an dem Sie dies im Einsatz sehen können.'
            ],
            // CTA: {
            //   name: 'Read More',
            //   url: 'https://safenetwork.tech/roadmap/#self-authentication'
            // },
          }, {
            feature: 'Selbstverschlüsselung',
            desc: 'Daten werden auf Ihrem Computer verschlüsselt, bevor sie im Netzwerk speichern: keine Schlüssel oder Kennwörter verlassen jemals Ihren Computer',
            status: 'Komplett',
            para: [
              'Von MaidSafe erfunden, ist dies der Prozess, bei dem jede im Netzwerk zu speichernde Datei zuerst in Blöcke aufgeteilt, zerlegt und dann verschlüsselt wird. Diese Blöcke werden dann selbst mit dem Hash eines anderen Blöcke aus derselben Datei verschlüsselt.'
            ],
            video: {
              url: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
              caption: 'Selbstverschlüsselung erklärt'
            }
          }, {
            feature: 'Disjunkte Abschnitte',
            desc: 'Sonst bekannt als Begehung, kann das Netzwerk auf diese Weise angepasst werden, indem die Verantwortlichkeiten für bestimmte Netzwerkfunktionen aufgeteilt werden.',
            status: 'Komplett',
            para: [
              'Stellt sicher, dass das Netzwerk skaliert werden kann, indem die Verantwortlichkeiten und Standorte jedes Knotens verwaltet werden, ohne dass ein menschliches Eingreifen erforderlich ist. Dies tritt auch als Sicherheitsmaßnahme auf, um sicherzustellen, dass ein Angreifer seinen Standort oder seine Verantwortlichkeiten nicht auswählen kann.'
            ],
            CTA: {
              name: 'Lesen Sie mehr',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-6-disjoint-sections/28530'
            },
          }, {
            feature: 'Nachrichtenübertragung',
            desc: 'Stellt sicher, dass eine Nachricht zwischen Knoten in verschiedenen disjunkten Abschnitten gesendet werden kann',
            status: 'Komplett',
            para: [
              'Stellt sicher, dass eine Nachricht zwischen Knoten in verschiedenen disjunkten Abschnitten gesendet werden kann. In diesem frühen Durchlauf enthält jede Nachricht Signaturen der Mitglieder der disjunkten Abschnitte, aber überprüft die Signaturen jedoch noch nicht.'
            ],
          },
          {
            feature: 'PARSEC',
            desc: 'Asynchroner Konsensalgorithmus',
            status: 'Komplett',
            para: [
              'Stellt sicher, dass ein global dezentralisiertes, genehmigungsloses Netzwerk eine Einigung über zulässige Ereignisse und die Reihenfolge ihrer Aufzeichnung erzielen kann. Ein DAG-basierter Algorithmus, der den höchstmöglichen Sicherheitsstandard erreicht und von MaidSafe so erfunden wurde, dass mathematisch sichergestellt ist, dass jeder Teil des Netzwerkes eine endgültige Einigung erzielt. In Fleming werden wir eine hoch asynchrone Version von PARSEC veröffentlichen, die später vollständig asynchron sein wird.'
            ],
            CTA: {
              name: 'Lesen Sie mehr',
              url: 'https://hub.safedev.org/parsec/'
            },
          }, {
            feature: 'Knotenalterung',
            desc: 'Ein dezentralisiertes Einstufungssystem des Verhaltens, der Leistung und der Fähigkeiten von Knoten im Netzwerk, das kein menschliches Eingreifen erfordert.',
            status: 'Komplett',
            para: [
              'Jeder Knoten in dem SAFE Network erhält von dem Netzwerk selbst ein Alter. Das Knotensalter erhöht sich jedes Mal, wenn ein Knoten zwischen disjunkten Abschnitten sich bewegt, wobei nur die ältesten (Ältesten) während des PARSEC Konsens Algorithmus wahlberechtigt sind.',
              'Erforschen Sie die Einzelheiten im RFC und nehmen [Sie an der Diskussion](https://forum.safedev.org/t/rfc-45-node-ageing/157) im Forum teil.'
            ],
            CTA: {
              name: 'Lesen Sie den RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'Sichere Nachrichtenübermittlung',
            desc: 'Vertrauenswürdige Kommunikation zwischen Knoten - Nachrichten mit beglaubigter Quelle',
            status: 'Komplett',
            para: [
              'Stellt sicher, dass Nachrichten so gesendet und signiert werden, dass Knoten sich auf den Inhalt jeder Nachricht verlassen können, obwohl keine vorherige Beziehung zum Absender besteht. Dies klärt ein Problem auf, mit dem viele bestehende blockchainbasierte Projekte konfrontiert sind und es ist wichtig, wenn Sie über ein Netzwerk verfügen, dass Knoten sich nach Bedarf autonom bewegt.'
            ],
            CTA: {
              name: 'Lesen Sie den RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'Zuverlässige Nachrichtenübermittlung',
            desc: 'Kommunikation, die die erfolgreiche Zustellung von Nachrichten garantiert.',
            status: 'Komplett',
            para: [
              'Stellt sicher, dass alle gesendeten Nachrichten erfolgreich an Ihre Ziele übermittelt werden, auch wenn einige für die Zustellung verantwortliche Knoten ausfallen.'
            ],
            CTA: {
              name: 'Lesen Sie den RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QUIC-P2P',
            desc: 'Die einfache Spacher, die Benutzer, die eine Verbindung zu SAFE herstellen, für die gesamte Netzwerkkommunikation verwenden',
            status: 'Komplett',
            para: [
              'Eine Software, mit der Computern im SAFE Netzwerk verschlüsselt kommunizieren können. Die Software stellt die Infrastruktur für das Senden von Nachrichten bereit, während die Routing Schicht des Netzwerks die Regeln festlegt, in welche Richtungen diese Nachrichten gesendet werden können.'
            ],
          }, {
            feature: 'Böswillige Erkennung',
            desc: 'Verhindern, dass böswillige Knoten den Konsens Algorithmus PARSEC untergraben',
            status: 'Komplett',
            para: [
              'Die Art und Weise, wie Knoten böswillige Knoten identifizieren, die das Netzwerk innerhalb eines disjunkten Abschnitts beschädigen, und der Mechanismus, mit dem sie sich bereit erklären, diesen Knoten auszuwerfen oder das Risiko zu mildern.'
            ],
            CTA: {
              name: 'Lesen Sie den RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            }
          }, {
            feature: 'Testen Sie Safecoin & Brieftasche',
            desc: 'Ermöglichen Sie der Netzwerkaufladung und dem Benutzer das Senden und Empfangen von Zahlungen an eine Brieftasche, in Einheiten namens Test Safecoin',
            status: 'Komplett',
            para: [
              'Safecoin ist der Anreizmechanismus, der Einzelpersonen dazu ermutigt, die für das Netzwerk erforderlichen Computerressourcen bereitzustellen: Speicher-, Breitband- und CPU-Ressourcen.',
            ]
          }, {
            feature: 'Landwirtschaft',
            desc: 'Der Prozess der Bereitstellung von Ressourcen und des Empfangs von Safecoin als Gegenleistung',
            status: 'Entwicklung',
            para: [
              'Personen, die sich für die Bereitstellung der für das Netzwerk erforderlichen Ressourcen entscheiden, haben die Möglichkeit, mit Safecoin belohnt zu werden. Diese Beschäftigung stellt sicher, dass das Netzwerk diejenigen belohnt, die es mit wertvollen Ressourcen versorgen.',
            ],
          }, {
            feature: 'Gewölbe von zu Hause aus',
            desc: 'Die Möglichkeit für jeden, Software herunterzuladen und Tresore von zu Hause auszuführen, wodurch ein dezentralisierter Netzwerkspeicher erstellt wird',
            status: 'Entwicklung',
            para: [
              'Die dezentralisierte Datenspeicherung ist ein Schlüsselelement des SAFE Networks. Mit dieser Version können Knoten unabhängig von den von ihnen angebotenen Ressourcen teilnehmen.'
            ],
          }, {
            feature: 'Veröffentlichte und unveröffentlichte Datentypen',
            desc: 'Ermöglichen Sie dem Netzwerk, veröffentlichte und unveröffentlichte Daten über die Typen AppendOnlyData oder MutableData (unveränderliche Daten) zu speichern',
            status: 'Komplett',
            para: [
              'Veröffentlichte Daten beziehen sich auf Inhalte, die für alle veröffentlicht (verfügbar gemacht) werden, z.B. Websites, Blogs oder Forschungsarbeiten. Für solche öffentlichen Inhalte wird es wichtig, eine Änderungshistorie beizubehalten. Die Geschichte darf nicht manipuliert werden und die veröffentlichen Daten müssen für immer übrigbleiben. Unveröffentlichte Daten sind Daten, die nicht veröffentlicht werden sollen, wie z.B. personenbezogene Daten oder im Netzwerk von Organisationen gespeicherte Daten.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Unveröffentlichte unveränderliche Daten, Datentyp',
            desc: 'Erweitern Sie unveränderliche Daten, um sie unveröffentlicht oder veröffentlicht zu machen, mit dem Unterschied, dass unveröffentlichte Daten gelöscht werden können',
            status: 'Komplett',
            para: [
              'Schon öfter gibt es Fälle, in denen ein Benutzer unveränderliche Daten erstellt benötigt, um private Inhalte zu speichern. Solange dieser Inhalt nicht veröffentlicht (für andere verfügbar gemacht) wird, kann er nur vom Dateneigentümer gelöscht werden.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            //},
          }
        ]
      }
    },
    release3: {
      overline: 'ALS NÄCHSTES',
      title: 'SAFE Maxwell Network',
      para: ['Die SAFE Maxwell Veröffentlichung baut auf Fleming auf und ermöglicht das Netzwerk ein Upgrade, verbessert die Sicherheit und schafft die Grundlage für die Umstellung von Test-SAFE-Münzen auf echte SAFECoin.'],
      accordion: {
        header: [
          'Maxwell Eigenschaft',
          'Beschreibung',
          'Status'
        ],
        items: [
          {
            feature: 'Spam Behandlung',
            desc: 'Fähigkeit, mit Spam Angriffen umzugehen',
            status: 'Konzept',
            para: [
              'Spam enthält Knoten, die versuchen Aktivitäten ausführen, die sie nicht ausführen sollten, oder gültige Aktivitäten in einer Skala, die das Netzwerk ersticken soll. Das Netzwerk sollte in der Lage sein, einem angemessenen Volumen solcher Angriffe standzuhalten.'
            ],
          }, {
            feature: 'Identitätsmanagement',
            desc: 'Möglichkeit für Benutzer, mehrere Identitäten zur Verwendung im Netzwerk zu erstellen und zu verwalten',
            status: 'Konzept',
            para: [
              'Benutzer können mehrere Identitäten im Netzwerk erstellen. Jede Identität kann nach Bedarf des Benutzers verwendet werden und sollte unabhängig sein, es sei denn , der Benutzer sie ausdrücklich verbinden möchte . Dies trägt zum Schutz der Identität und der Privatsphäre bei.'
            ],
          },
          {
            feature: 'Verbesserungen',
            desc: 'Die Fähigkeit des Netzwerks, sich selbst zu aktualisieren, ohne Schaden zu verursachen',
            status: 'Konzept',
            para: [
              'Das Netzwerk kann sich selbst aktualisieren, damit Besonderheiten und Verbesserungen im gesamten Netzwerk verbreitet werden können. Die Verbesserungen müssen so durchgeführt werden, dass sie dem Netzwerk keinen Schaden auslösen.',
              'Dies ist eine wichtige Phase in der Entwicklung des Netzwerks und bedeutet, dass neue Software weiterhin im vorhandenen Netzwerk bereitgestellt werden kann, ohne die vorhandene Funktionalität zu unterbrechen.'
            ],
            CTA: {
              name: 'Folgen Sie der Diskussion',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'Coming Soon',
      title: 'Upcoming Network Features',
      para: ['The following list represents network work that remains to be completed. The order should not be seen as fixed in any way as in certain cases, work will be carried out in parallel by different teams.'],
      accordion: {
        header: [
          'Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Secure Enclaves',
            desc: 'A trusted executable environment within existing computers',
            status: 'Concept',
            para: [
              'Creates an area within the hardware of a computer that is a secure, trusted environment that stands separate from the rest of the computer. It functions like a mini-computer inside existing computers that cannot be opened.'
            ],
          }, {
            feature: 'Network Growth',
            desc: 'Allow the network to grow and scale in a sustainable way',
            status: 'Concept',
            para: [
              'The Network allows controlled growth to ensure that the majority of decision-makers are healthy nodes that follow the rules of the Network. This growth should be sustainable in order to avoid unnecessary mergers between Sections.'
            ],
          }, {
            feature: 'Network Restarts',
            desc: 'Ability for the network to restart after a catastrophe',
            status: 'Concept',
            para: [
              'In the event of a catastrophic outage, the Network should be able to rebuild itself because it maintains the integrity of essential data (such as chain history) which enables it to start functioning again on the basis of the last known state of the Network.'
            ],
          }, {
            feature: 'RDF Support',
            desc: 'The Network will have native support for RDF, enabling data to be compatible with the Semantic Web',
            status: 'RFC',
            para: [
              'Ensures that data on the SAFE Network is stored in such a way that the format can be understood by other Semantic Web projects, such as Solid.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Vault on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Concept',
            para: [
              'Ensures that even the smallest piece of data that is stored in a Vault cannot be read by the person controlling the computer on which it is stored.'
            ],
          }, {
            feature: 'Common Coin',
            desc: 'Replace our concrete coin with a common coin to make PARSEC fully asynchronous',
            status: 'Design',
            para: [
              'Common coin is a device that nodes can use to generate a “random” binary value (true or false). Every time a node flips the coin, all other nodes are guaranteed to observe the same value for their coin flip. Also, the value must be unpredictable, which means that no malicious node can know the outcome before a honest node has observed it.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Apps and User Experience',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'The latest release includes some of the beginnings of the Perpetual Web. Please note that it\'s only compatible with the Vaults Phase 1 release.',
        status: 'Latest Version v0.16.0'
      }
    ],
    currentMilestone: {
      status: 'Current Milestone',
      title: 'The Perpetual Web',
      para: 'The SAFE Network is designed to ensure that public data is permanent and can never be deleted. Individuals and groups can choose to keep their data private, but once it’s been published, it will remain permanently available. This milestone aims to showcase the incredible power of this facet of the Network, by building out the User Experience, and iterating on it right through to launch.',
      accordion: {
        header: [
          'Milestone Features',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'SAFE Browser',
            desc: 'Enhancements to the browser designed specifically to take advantage of the functionalities of the Perpetual Web',
            status: 'Complete',
            para: [
              'The SAFE Browser functionality will be extended to incorporate new features that are unique to the Perpetual Web, such as the ability to roll-back through the version history of any SAFE website or asset.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of SAFE browser which is limited to browsing published data from the SAFE Network',
            status: 'Complete',
            para: [
              'Enables individuals to access the SAFE Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of SAFE sites and Perpetual Data',
            status: 'Development',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the SAFE Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Complete',
            para: [
              'A command line tool to manage data on the SAFE Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'Complete',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The SAFE Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Upcoming Milestones',
      list: [
        {
          title: 'Private Communications',
          para: 'If we want a world in which individuals can communicate freely whenever they choose, privacy is essential. This milestone aims to deliver just that.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Private Messaging',
                desc: 'Send secure private messages between clients',
                status: 'Concept',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Concept',
                para: [
                  'Enables SAFE users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The SAFE Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Data Manager',
                desc: 'Fine-grained management of your personal data',
                status: 'Concept',
                para: [
                  'The extension of the Data Manager tool to allow fine-grained control by individuals over their private and unpublished data.'
                ],
              },
              {
                feature: 'RDF Support',
                desc: 'Support storing and querying RDF resources in SAFE-Core',
                status: 'RFC',
                para: [
                  'Ensures that the SAFE Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Support',
                desc: 'Add native support for SPARQL to allow searching of data',
                status: 'Concept',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Concept',
                para: [
                  'Manage sharing and permissions of private, unpublised data and files, for collaboration between individuals and groups. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'A way of sharing and accessing SAFE Network files without the need for a Public Name',
                status: 'Complete',
                para: [
                  'Create a system of standardised URL’s on the SAFE Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner.'
                ],
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the SAFE Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safecoin Wallet',
                desc: 'Transact using Test Safecoins',
                status: 'Development',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Concept',
                para: [
                  'Users will see greatly-improved Vault User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
