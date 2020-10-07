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
      overline: 'DEMNÄCHST',
      title: 'Kommende Netzwerkeigenschaften',
      para: ['Die folgende Liste stellt die Netzwerkarbeiten dar, die noch abgeschlossen werden müssen. Der Auftrag sollte in keiner Weise als festgelegt angesehen werden, da in bestimmten Fällen die Arbeiten parallel von verschieden Teams ausgeführt werden.'],
      accordion: {
        header: [
          'Eigenschaft',
          'Beschreibung',
          'Status'
        ],
        items: [
          {
            feature: 'Sichere Enklaven',
            desc: 'Ein vertrauenswürdige ausführbare Umgebung auf vorhandenen Computern',
            status: 'Konzept',
            para: [
              'Erstellt einen Bereich innerhalb der Hardware eines Computers, der eine sichere, vertrauenswürdige Umgebung darstellt, die vom Rest des Computers getrennt ist. Es funktioniert wie ein Mini-Computer innerhalb der vorhandenen Computern, die nicht geöffnet werden können.'
            ],
          }, {
            feature: 'Netzwerkwachstum',
            desc: 'Ermöglichen Sie dem Netzwerk, nachhaltig zu wachsen und zu skalieren',
            status: 'Konzept',
            para: [
              'Das Netzwerk ermöglicht ein geregeltes Wachstum, um sicherzustellen, dass die Mehrheite der Entscheidungsträger gesunde Knoten sind, die den Regeln des Netzwerks folgen. Dieses Wachstum sollte nachhaltig sein, um unnötige Vereinigungen zwischen den Bereichen zu vermeiden.'
            ],
          }, {
            feature: 'Neustart des Netzwerks',
            desc: 'Möglichkeit für das Netzwerk, nach einer Katastrophe neuzustarten',
            status: 'Konzept',
            para: [
              'Im Falle eines katastrophalen Ausfalls sollte das Netzwerk in der Lage sein, sich selbst wieder aufzubauen, da es die Integrität wesentlicher Daten (z.B. des Kettenverlaufs) erhält und auf der Grundlage des letzten bekannten Status des Netzwerks wieder funktionsfähig wird.'
            ],
          }, {
            feature: 'RDF Unterstützung',
            desc: 'Das Netzwerk wird native Unterstützung für RDF bieten, sodass Daten mit dem Semantic Web kompatibel sind',
            status: 'RFC',
            para: [
              'Stellt sicher, dass Daten im SAFE Network sо gespeichert werden, dass der Aufbau von anderen Semantic Web-Projekten wie Solid verstanden werden kann.'
            ],
            CTA: {
              name: 'Lesen Sie den RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Verschleierung gespeicherter Daten',
            desc: 'Alle Daten, die in einem Tresor auf dem Computer einer Person gespeichert sind, müssen vollständig verschlüsselt und nicht lesbar sein',
            status: 'Konzept',
            para: [
              'Stellt sicher, dass selbst die kleinsten Datenstücke, die in einem Tresor gespeichert sind, von der Person, die den Computer steuert, auf dem diese Datenstücke gespeichert sind, nicht gelesen werden können.'
            ],
          }, {
            feature: 'Gemeinsame Münze',
            desc: 'Ersetzen Sie unsere Betonmünze durch eine gewöhnliche Münze, um PARSEC vollständig asynchron zu machen',
            status: 'Design',
            para: [
              'Eine gewöhnliche Münze ist ein Gerät, mit dem Knoten einen “zufälligen” Binärwert (richtig oder falsch) generieren können. Jedes Mal, wenn ein Knoten die Münze wirft, wird garantiert, dass alle anderen Knoten den gleichen Wert für ihren Münzwurf beobachten. Außerdem muss der Wert unvorhersehbar sein, was bedeutet, dass kein böswilliger Knoten das Ergebnis erkennen kann, bevor ein ehrlicher Knoten es beobachtet hat.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Apps und Benutzererfahrung',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'Die neueste Version enthält einige der Anfänge des Perpetual Webs, sowie den Authentifikator: so können Sie sich sicher beim SAFE Network anmelden und den Zugriff und die Berechtigungen von SAFE Apps verwalten.',
        status: 'Latest Version v0.16.0'
      }
    ],
    currentMilestone: {
      status: 'LAUFENDER MEILENSTEIN',
      title: 'Das ewige Web',
      para: 'Das SAFE Network soll sicherstellen, dass öffentliche Daten dauerhaft sind und niemals gelöscht werden können. Einzelpersonen und Gruppen können ihre Daten privat halten. Sobald sie veröffentlicht wurden, bleiben sie dauerhaft verfügbar. Dieser Meilenstein zielt darauf ab, die unglaubliche Leistungsfähigkeit dieses Aspektes des Netzwerks zu demonstrieren, indem die Benutzererfahrung ausgebaut und bis zum Start wiederholt wird.',
      accordion: {
        header: [
          'Meilenstein Eigenschaften',
          'Beschreibung',
          'Status'
        ],
        items: [
          {
            feature: 'SAFE Browser',
            desc: 'Browser Verbesserungen, die speziell entwickelt wurden, um die Eigenschaften des ewigen Webs zu nutzen',
            status: 'Komplett',
            para: [
              'Die SAFE-Browser-Funktionalität wird um neue Eigenschaften erweitert, die nur im ewigen Web verfügbar sind, z.B. die Möglichkeit, den Versionsverlauf einer SAFE Website oder eines SAFE Vermögens zurückzusetzen.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile Version des SAFE Browsers, die sich auf das Durchsuchen veröffentlichter Daten aus dem SAFE Network beschränkt',
            status: 'Komplett',
            para: [
              'Ermöglicht Einzelpersonen den direkten Zugriff auf das SAFE Network mithilfe eines Browsers auf ihrem Mobiltelefon'
            ],
          },
          {
            feature: 'Datenmanager',
            desc: 'Optimierte Veröffentlichung von SAFE Sites und ewige Daten',
            status: 'Entwicklung',
            para: [
              'Eine Reihe von Tools, die die erforderlichen Funktionalitäten zur Datenhinzufügung zum SAFE Network, zu Veröffentlichen fortlaufender Daten und öffentliche Namen verwalten. Dies ersetzt den Webhosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'Eine erweiterte CLI zum Verwalten von Knoten und Daten',
            status: 'Komplett',
            para: [
              'Ein Befehlszeilentool zur Datenverwaltung im SAFE Network. Der Benutzer kann Daten im Netzwerk speichern und Knoten, Identitäten und Berechtigungen verwalten. Dies ist das Tool, auf dem die Frontend- Apps und -Funktionen wie der Datenmanager aufgebaut werden.'
            ],
          },
          {
            feature: 'Öffentliches Namenssystem',
            desc: 'Gespeicherte Inhalte sollten mit lesbaren URLs über ein dezentralisiertes Domain Name System, zugänglich sein: das Öffentliche Namenssystem',
            status: 'Komplett',
            para: [
              'Ein Domain Name System übersetzt zahlenmäßige IP Adressen in ein Format, das von Menschen gelesen werden kann (z.B. http//216.58.206.35 wird in Google.com aufgelöst). Das aktuelle Web ist auf eine zentralisierte Organisation gebaut, um diese Aufzeichnung zu verwalten. Das SAFE Network verlangt, dass dieser Prozess außerhalb der Kontrolle einer einzelnen Seite liegt, um Zensure und Unterdrückung zu vermeiden.'
            ],
            CTA: {
              name: 'Lesen Sie den RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'KOMMENDE MEILENSTEINE',
      list: [
        {
          title: 'Private Kommunikation',
          para: 'Wenn wir eine Welt wollen, in der Einzelpersonen jederzeit frei kommunizieren können, ist Privatsphäre unerlässlich. Dieser Meilenstein zielt darauf ab, genau das zu erreichen.',
          accordion: {
            header: [
              'Meilenstein Funktionen',
              'Beschreibung',
              'Status'
            ],
            items: [
              {
                feature: 'Private Nachrichten',
                desc: 'Senden Sie sichere private Nachrichten zwischen Kunden',
                status: 'Konzept',
                para: [
                  'Eine der gefragtesten Funktionen des SAFE Networks: sichere, private und sofortige Nachrichtenübermittlung.'
                ],
              },
              {
                feature: 'Identitätsmanagement',
                desc: 'Möglichkeit für Benutzer, mehrere Identitäten zu erstellen und zu verwalten',
                status: 'Konzept',
                para: [
                  'Verbessert die Benutzererfahrung für Einzelpersonen, wenn sie zwischen den Identitäten (oder Profilen) wechseln, mit denen sie sich im SAFE Network darstellen möchten, ohne dass mehrere Konten erstellt werden müssen.'
                ],
              },
              {
                feature: 'Kontaktverwaltung',
                desc: 'Finden Sie, verbinden Sie und bleiben Sie mit anderen SAFE Network Benutzern auf dem Laufenden',
                status: 'Konzept',
                para: [
                  'Ermöglicht den SAFE Benutzern das konsistente Finden und Verbinden mit anderen Personen in einer Reihe von Anwendungen.'
                ],
              },
            ]
          }
        },
        {
          title: 'Übernehmen Sie die Kontrolle über Ihre Daten',
          para: 'Das SAFE Network stellt das aktuelle Dateneigentumsmodell auf den Kopf. Persönliche Informationen werden nicht mehr auf Unternehmensservern gespeichert. Durch die Selbstauthentifizierung haben Sie die vollständige Kontrolle über Ihre Daten. Sie können Apps jederzeit die Erlaubnis erteilen (und widerrufen), Ihre Daten zu verwenden, und auch verhindern, dass nicht autorisierte Unternehmen oder Dritte jemals Zugriff erhalten.',
          accordion: {
            header: [
              'Meilenstein Funktionen',
              'Beschreibung',
              'Status'
            ],
            items: [
              {
                feature: 'Datenmanager',
                desc: 'Feinkörnige Verwaltung Ihrer persönlichen Daten',
                status: 'Konzept',
                para: [
                  'Die Erweiterung des Datenmanager-Tools, um Einzelpersonen eine detaillierte Kontrolle über ihre privaten und unveröffentlichten Daten zu ermöglichen.'
                ],
              },
              {
                feature: 'RDF Unterstützung',
                desc: 'Unterstützung beim Speichern und Abfragen von RDF Ressourcen in SAFE Core',
                status: 'RFC',
                para: [
                  'Stellt sicher, dass das SAFE Network eine Methode zur Beschreibung der Datenarchitektur versteht. Und sie wird von anderen Projekten wie Solid verstanden.'
                ],
                CTA: {
                  name: 'Lesen Sie den',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Unterstützung',
                desc: 'Fügen Sie native Unterstützung für SPARQL hinzu, um die Datensuche zu ermöglichen',
                status: 'Konzept',
                para: [
                  'Verbessert die SAFE Funktionalität durch Hinzufügen von SPARQL Unterstützung zu SAFE Kundenlabors und SAFE Gewölbe. Dies stellt sicher, dass das Netzwerk eine bekannte semantische Abfragesprache verstehen kann, und ermöglicht Benutzern die Suche.'
                ],
              },
              {
                feature: 'Zusammenarbeit',
                desc: 'Tools, die die Zusammenarbeit durch Freigabe und Gruppenberechtigungen für private unveröffentlichte Daten, aktivieren',
                status: 'Konzept',
                para: [
                  'Verwalten Sie die Freigabe und Berechtigungen von privaten, nicht veröffentlichten Daten und Dateien, für die Zusammenarbeit zwischen Einzelpersonen und Gruppen. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'Eine Weise zum Teilen und Zugreifen auf SAFE Netzwerkdateien, ohne dass ein öffentlicher Name erforderlich ist',
                status: 'Komplett',
                para: [
                  'Erstellen Sie im SAFE Network ein System standardisierter URLS, die auf der XOR Adresse des Inhalts basieren, auf den verweisen wird. Stellt sicher, dass Einzelpersonen benutzerfreundlicher auf Daten und Dateien zugreifen und diese finden können.'
                ],
              }
            ]
          }
        },
        {
          title: 'Die neue digitale Wirtschaft',
          para: 'In der neuen digitalen Wirtschaft geht es darum, sicherzustellen, dass Sie Ihr digitales Leben nicht mehr mit Daten bezahlen. Stattdessen verwenden Sie eine Kryptowährung, die vom SAFE Network integriert und verteilt wird. Sie verdienen Wert als Gegenleistung für die Bereitstellung von Ressourcen für das Netzwerk.',
          accordion: {
            header: [
              'Meilenstein Funktionen',
              'Beschreibung',
              'Status'
            ],
            items: [
              {
                feature: 'Testen Sie Safecoin Geldbörse',
                desc: 'Transaktionen mit Test Safecoins',
                status: 'Entwicklung',
                para: [
                  'Benutzer können Test Safecoin im Netzwerk verwenden, sodass ein Ökosystem sich auf dem SAFE Anreizmechanismus aufbauen kann. Dazu gehört auch die Möglichkeit, mehrere Brieftaschen zu erstellen, sie einer Identität zuzuordnen und Brieftaschen zur einmaligen Verwendung anzuordnen, um anonyme Transaktionen zu ermöglichen.',
                ],
              },
              {
                feature: 'Gewölbe Benutzeroberfläche',
                desc: 'Einfaches Einrichten, Ausführen und Verwalten eines Tresors',
                status: 'Konzept',
                para: [
                  'Benutzer werden eine stark verbesserte Gewölbe-Benutzererfahrung sehen. Jeder, der Speicher für das Netzwerk bereitstellt, kann mit einer Reihe von Verbesserungen der Benutzerfreundlichkeit rechnen, die es einfach machen, Ressourcen anzubieten und mit der Landwirtschaft auf alltäglichen Heimcomputern und Geräten zu beginnen.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
