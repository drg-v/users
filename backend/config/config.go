package config

import (
	"sync"

	"github.com/ilyakaznacheev/cleanenv"
)

const DevConfig = "config/config.dev.yml"
const DefaultConfig = "config/config.yml"

type Config struct {
	App struct {
		Port string `env:"PORT" env-default:"8000" yaml:"port"`
	} `env:"app" yaml:"app"`
	PostgreSQL struct {
		Username string `env-required:"true"  yaml:"username"`
		Password string `env-required:"true"  yaml:"password"`
		Host     string `env-required:"true"  yaml:"host"`
		Port     string `env-required:"true"  yaml:"port"`
		Database string `env-required:"true"  yaml:"database"`
		SSLMODE  string `env-default:"disable" yaml:"sslmode"`
	} `yaml:"postgreSQL"`
}

var instance *Config
var once sync.Once

func GetConfig() *Config {
	var configFiles = []string{DefaultConfig, DevConfig}

	once.Do(func() {
		instance = &Config{}
		for _, v := range configFiles {
			if err := cleanenv.ReadConfig(v, instance); err != nil {
				_, _ = cleanenv.GetDescription(instance, nil)
				continue
			}

			break
		}
	})

	return instance
}
